'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.removeColumn(
      'Bands',
      'genre'
    );
    await queryInterface.removeColumn(
      'Bands',
      'totalMembers'
    );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.addColumn(
      'Bands',
      'genre',
      Sequelize.STRING
    );
    await queryInterface.addColumn(
      'Bands',
      'totalMembers',
      Sequelize.INTEGER
    );
  }
};
