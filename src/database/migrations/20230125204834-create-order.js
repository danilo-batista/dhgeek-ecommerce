'use strict';

const Order = require('../../models/Order');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('order',
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
        },
        cartId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'cart',
            key: 'id'
          }
        },
        userId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'user',
            key: 'id'
          }
        },
        deliveryDate: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        totalPrice: {
          type: Sequelize.DECIMAL(11, 2),
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
        tableName: 'order'
      });

    Order.associate = (models) => {
      [
        Order.belongsTo(models.Cart, {
          foreignKey: 'cartId',
          as: 'cart'
        }),
        Order.belongsTo(models.User, {
          foreignKey: 'userId',
          as: 'user'
        })
      ]
    };
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('order');
  }
};
