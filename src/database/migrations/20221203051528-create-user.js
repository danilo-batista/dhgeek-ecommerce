'use strict';

const User = require('../../models/User')

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('user',
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
        password: {
          type: Sequelize.STRING(20),
          allowNull: false
        },
        firstName: {
          type: Sequelize.STRING(40),
          allowNull: false
        },
        lastName: {
          type: Sequelize.STRING(40),
          allowNull: false
        },
        birthday: {
          type: Sequelize.DATEONLY,
          allowNull: false
        },
        cpf: {
          type: Sequelize.STRING(11),
          allowNull: false
        },
        rg: {
          type: Sequelize.STRING(9),
          allowNull: false
        },
        typeId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'user_types',
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
        underscored: true,
        freezeTableName: true,
        tableName: 'user'
      });

    User.associate = (models) => {
      User.belongsTo(models.UserTypes, {
        foreignKey: 'typeId',
        as: 'type'
      })
    };
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('user');
  }
};
