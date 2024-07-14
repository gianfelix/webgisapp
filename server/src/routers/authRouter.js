const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middleware/auth");
const authController = require("../controllers/authControllers");

router.post("/login", authController.login);
router.post("/",  authController.register);
router.patch("/",  authController.verify);
router.get("/role", authController.getAllRoles)
router.get("/", authController.getAllUsers)

module.exports = router;