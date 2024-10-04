'use strict';

const { hashPassword } = require('../Helpers/bycripts');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const data = require("../data/users.json").map((e) => {
      e.password = hashPassword(e.password);
      e.createdAt = e.updatedAt = new Date();
      return e;
    });
    await queryInterface.bulkInsert("Users",data,{})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Users",null,{})
  }
};
