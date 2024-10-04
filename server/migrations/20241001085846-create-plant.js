'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Plants', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull:false,
        type: Sequelize.STRING
      },
      type: {
        allowNull:false,
        references:{
          model:"Types",
          key: "id"
        },
        type: Sequelize.INTEGER
      },
      watersNeeds: {
        allowNull:false,
        type: Sequelize.STRING
      },
      lightNeeds: {
        allowNull:false,
        type: Sequelize.STRING
      },
      temperatureRange: {
        allowNull:false,
        type: Sequelize.STRING
      },
      soilType: {
        allowNull:false,
        type: Sequelize.STRING
      },
      imageUrl: {
        allowNull:false,
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Plants');
  }
};