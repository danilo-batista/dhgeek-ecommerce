'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('user_types',
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
        },
        type: {
          type: Sequelize.STRING(80),
          allowNull: false
        },
        createdAt: {
          type: Sequelize.DATE,
          defaultValue: new Date(),
          allowNull: false
        },
        updatedAt: {
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
        underscored: false,
        freezeTableName: true,
        tableName: 'user_types'
      });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('user_types');
  }
};