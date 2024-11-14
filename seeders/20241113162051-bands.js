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
    await queryInterface.bulkInsert('Bands', [
      { name: 'Paramore', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Flatbush Zombies', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Linkin Park', createdAt: new Date(), updatedAt: new Date() },
      { name: 'The White Stripes', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Foo Fighters', createdAt: new Date(), updatedAt: new Date() },
      { name: 'The Beatles', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Rage Against the Machine', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Nirvana', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Pink Floyd', createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Bands', null, {});
  }
};
