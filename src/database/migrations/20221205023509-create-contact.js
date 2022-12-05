'use strict';

const Contact = require('../../models/Contact')

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('contact',
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
        },
        email: {
          type: Sequelize.STRING(80),
          allowNull: false
        },
        message: {
          type: Sequelize.TEXT,
          allowNull: false
        },
        createdAt: {
          type: Sequelize.DATE,
          defaultValue: new Date(),
          allowNull: false
        },
        deletedAt: {
          type: Sequelize.DATE,
          allowNull: true
        }
      },
      {
        timestamps: true,
        paranoid: true,
        underscored: true,
        freezeTableName: true,
        tableName: 'contact'
      });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('contact');
  }
};
