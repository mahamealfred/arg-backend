'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Families', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
       
      },
      name: {
        type: Sequelize.STRING
      },
      fatherName: {
        type: Sequelize.STRING
      },
      motherName: {
        type: Sequelize.STRING
      },
      members: {
        type:Sequelize.ARRAY(Sequelize.STRING)
      },
      schoolId: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Families');
  }
};