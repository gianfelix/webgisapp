'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('reports', {
      report_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      title: Sequelize.STRING,
      category_id: Sequelize.INTEGER,
      user_id: Sequelize.INTEGER,
      description: Sequelize.STRING
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('reports')
  }
};
