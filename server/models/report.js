// table REPORT
"use stict"
const { Model } = require('sequelize');
const user = require('./user');

module.exports = (sequelize, DataTypes) => {
    class Report extends Model {
        static associate(models) {
            this.belongsTo(models.User, { foreignKey: 'user_id', targetKey: 'user_id' });
            this.belongsTo(models.Category, { foreignKey: 'category_id', targetKey: 'category_id' });
        }
    }
    Report.init({
        report_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: DataTypes.STRING,
        category_id: DataTypes.INTEGER,
        user_id: DataTypes.INTEGER,
        description: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Report',
    });
    return Report;
}