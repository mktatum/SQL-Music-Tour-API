'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Events', 'stage');
    await queryInterface.removeColumn('Events', 'band');
    await queryInterface.bulkDelete('Events', null, {});
    await queryInterface.addColumn('Events', 'name', {
      type: Sequelize.STRING,
      allowNull: false
    });
    await queryInterface.addColumn('Events', 'start_time', {
      type: Sequelize.DATE,
      allowNull: false
    });
    await queryInterface.addColumn('Events', 'end_time', {
      type: Sequelize.DATE,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.addColumn('Events', 'stage', {
      type: Sequelize.INTEGER,
      references: { model: 'Stages', key: 'id' }
    });
    await queryInterface.addColumn('Events', 'band', {
      type: Sequelize.INTEGER,
      references: { model: 'Bands', key: 'id' }
    });
    await queryInterface.removeColumn('Events', 'name');
    await queryInterface.removeColumn('Events', 'start_time');
    await queryInterface.removeColumn('Events', 'end_time');
  }
};