// table ROLE
"use stict"
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Role extends Model {
        static associate(models) {
        }
    }
    Role.init({
        role_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nameRole: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Role',
    });
    return Role;
}