const db = require("../../models");
const User = db.User;
const Role = db.Role;
const { Op, where } = require("sequelize");
const path = require("path");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const handlebars = require("handlebars");
const fs = require("fs").promises;
const transporter = require("../helpers/transporter");


const sendEmailRegister = async (email, user) => {
    let payload = {
        id: user.user_id,
    };
    const token = jwt.sign(payload, process.env.JWT_KEY, {
        expiresIn: "1h",
    });
    const redirect = `http://localhost:3000/auth/verify/${token}`;
    const data = await fs.readFile(
        path.resolve(__dirname, "../emails/registerVerification.html"),
        "utf-8"
    );
    const tesCompile = handlebars.compile(data);
    const tempResult = tesCompile({
        email,
        redirect,
    });

    await transporter.sendMail({
        from: process.env.EMAIL,
        to: email,
        subject: "Register Verification",
        html: tempResult,
    });
};

const authController = {
    login: async (req, res) => {
        try {
            const { username, password } = req.body;
            const user = await User.findOne({
                where: {
                    username,
                },
            });

            if (!user)
                return res.status(400).json({
                    success: false,
                    message: "User not found",
                });
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch)
                return res.status(400).json({
                    success: false,
                    message: "Incorrect password",
                });
            const payload = {
                id: user.user_id,
                role_id: user.role_id,
                isVerified: user.isVerified,
                username: user.username,
                email: user.email,
            };
            const token = jwt.sign(payload, process.env.JWT_KEY, {
                expiresIn: "10h",
            });
            user.isVerified = true;
            await user.save();
            return res.status(200).json({
                success: true,
                message: "Login success",
                token,
                user: {
                    user_id: user.user_id,
                    role_id: user.role_id == 1 ? "admin" : "user",
                    username: user.username,
                    password: user.password,
                    email: user.email,
                    fullName: user.fullName,
                    birthDate: user.birthDate,
                    phoneNumber: user.phoneNumber,
                    address: user.address,
                    isVerified: user.isVerified,
                    isActive: user.isActive,
                    created_at: user.created_at,
                    updated_at: user.updated_at,
                },
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                message: "Internal server error",
            });
        }
    },
    register: async (req, res) => {
        try {
            const { username, password, email, fullName } = req.body;
            if (!username || !password || !email || !fullName) {
                return res.status(400).json({
                    success: false,
                    message: "Please provide username, password, email and full name",
                });
            }
            const check = await User.findOne({
                where: {
                    [Op.or]: [
                        {
                            username,
                        },
                        {
                            email,
                        },
                    ],
                },
            });
            if (check)
                return res.status(400).json({
                    success: false,
                    message: "Username or email already exist",
                });

            const hashedPassword = await bcrypt.hash(password, 12);

            await db.sequelize.transaction(async (t) => {
                const user = await User.create(
                    {
                        username,
                        password: hashedPassword,
                        email,
                        fullName,
                    },
                    { transaction: t }
                );
                await sendEmailRegister(email, user);
                return res.status(200).json({
                    success: true,
                    message: "Register success, please check your email for verification",
                });
            })
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                message: "Register server error",
            });
        }
    },

    updateRegister: async (req, res) => {
        try {
            const { username, password, email, fullName, birthDate, phoneNumber, address } = req.body;
            if (!username || !password || !email || !fullName || !birthDate || !phoneNumber || !address) {
                return res.status(400).json({
                    success: false,
                    message: "Please provide username, password, email, full name, birth date, phone number and address",
                });
            }

            db.sequelize.transaction(async (t) => {
                const checkUser = await User.findByPk(req.user.user_id);
                if (!checkUser) {
                    return res.status(400).json({
                        success: false,
                        message: "User not found",
                    });
                }

                if (checkUser.isVerified) {
                    return res.status(400).json({
                        message: "link has expired",
                    });
                }

                const salt = await bcrypt.genSalt(12);
                const hashPassword = await bcrypt.hash(password, salt);

                checkUser.username = username;
                checkUser.password = hashPassword;
                checkUser.email = email;
                checkUser.fullName = fullName;
                checkUser.birthDate = birthDate;
                checkUser.phoneNumber = phoneNumber;
                checkUser.address = address;
                checkUser.updated_at = new Date();
                await checkUser.save({ transaction: t });

                return res.status(200).json({
                    success: true,
                    message: "Update success",
                });
            })
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                message: "Internal server error", error
            });
        }
    },

    getAllUsers: async (req, res) => {
        try {
            const users = await User.findAll();
            return res.status(200).json({
                success: true,
                users,
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                message: "Internal server error",
            });
        }
    },

    getAllRoles: async (req, res) => {
        try {
            const roles = await Role.findAll();
            return res.status(200).json({
                success: true,
                roles,
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                message: "Internal server error",
            });
        }
    },
};

module.exports = authController;
