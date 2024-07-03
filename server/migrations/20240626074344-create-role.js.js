'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('roles', {
      role_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nameRole: Sequelize.STRING
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('roles')
  }
};
