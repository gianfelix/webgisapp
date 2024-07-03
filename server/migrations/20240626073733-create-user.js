'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      user_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      fullName: Sequelize.STRING,
      username: {
        type: Sequelize.STRING,
        unique: true
      },
      password: Sequelize.STRING,
      email: Sequelize.STRING,
      birthDate: Sequelize.DATE,
      role_id: Sequelize.INTEGER,
      phoneNumber: Sequelize.STRING,
      address: Sequelize.STRING,
      isVerified: Sequelize.BOOLEAN,
      isActive: Sequelize.BOOLEAN
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users')
  }
};
