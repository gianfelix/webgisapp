// table CATEGORY
"use stict"
const { Model } = require('sequelize');
const report = require('./report');

module.exports = (sequelize, DataTypes) => {
    class Category extends Model {
        static associate(models) {
            this.hasMany(models.Report, { foreignKey: 'category_id', sourceKey: 'category_id' });
        }
    }
    Category.init({
        category_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nameCategory: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Category',
    });
    return Category;
}