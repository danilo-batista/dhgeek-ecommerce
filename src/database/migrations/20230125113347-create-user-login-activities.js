'use strict';

const UserLoginActivities = require('../../models/UserLoginActivities')

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('user_login_activities',
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
        },
        userId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'user',
            key: 'id'
          }
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
        tableName: 'user_login_activities'
      });

    UserLoginActivities.associate = (models) => {
      UserLoginActivities.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user'
      })
    };
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('user_login_activities');
  }
};
