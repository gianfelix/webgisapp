// table USER model
"use stict"
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        static associate(models) {
            this.belongsTo(models.Role, { foreignKey: 'role_id', targetKey: 'role_id' });
            this.hasMany(models.Report, { foreignKey: 'user_id', sourceKey: 'user_id' });
        }
    }
    User.init({
        user_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        fullName: DataTypes.STRING,
        username: {
            type: DataTypes.STRING,
            unique: true
        },
        password: DataTypes.STRING,
        email: DataTypes.STRING,
        birthDate: DataTypes.DATE,
        role_id: DataTypes.INTEGER,
        phoneNumber: DataTypes.STRING,
        address: DataTypes.STRING,
        isVerified: DataTypes.BOOLEAN,
        isActive: DataTypes.BOOLEAN,
    }, {
        sequelize,
        modelName: 'User',
    });
    return User;
}