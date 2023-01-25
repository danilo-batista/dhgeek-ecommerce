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
          allowNull: true
        },
        lastName: {
          type: Sequelize.STRING(40),
          allowNull: true
        },
        birthday: {
          type: Sequelize.DATEONLY,
          allowNull: true
        },
        cpf: {
          type: Sequelize.STRING(11),
          allowNull: true
        },
        rg: {
          type: Sequelize.STRING(9),
          allowNull: true
        },
        avatar: {
          type: Sequelize.STRING(255),
          allowNull: true
        },
        typeId: {
          type: Sequelize.INTEGER,
          allowNull: true,
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
        underscored: false,
        freezeTableName: true,
        tableName: 'user'
      });

    User.associate = (models) => {
      [
        User.belongsTo(models.UserTypes, {
          foreignKey: 'typeId',
          as: 'type'
        }),
        User.hasMany(models.Address, {
          foreignKey: 'userId',
          as: 'address'
        }),
        User.hasMany(models.UserLoginActivities, {
          foreignKey: 'userId',
          as: 'userLoginActivities'

        }),
        User.hasMany(models.UserCreditCard, {
          foreignKey: 'userId',
          as: 'userCreditCard'
        }),
        User.hasMany(models.Order, {
          foreignKey: 'userId',
          as: 'order'
        })
      ]
    };
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('user');
  }
};
