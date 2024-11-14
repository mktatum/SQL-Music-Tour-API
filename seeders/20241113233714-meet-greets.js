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
    await queryInterface.bulkInsert('MeetGreets', [
      { band_id: 1, event_id: 1, start_time: new Date('2024-08-25 18:00:00'), createdAt: new Date(), updatedAt: new Date() },
      { band_id: 1, event_id: 2, start_time: new Date('2024-04-01 18:00:00'), createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('MeetGreets', null, {});
  }
};
