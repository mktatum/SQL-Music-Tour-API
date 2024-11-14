'use strict';

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
    await queryInterface.bulkInsert('Events', [
      { name: 'Burning Man', start_time: new Date('2024-08-25 00:00:00'), end_time: new Date('2024-09-02 23:59:59'), createdAt: new Date(), updatedAt: new Date() },
      { name: 'Dream Fest', start_time: new Date('2024-04-01 09:00:00'), end_time: new Date('2024-04-05 21:00:00'), createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Events', null, {});
  }
};
