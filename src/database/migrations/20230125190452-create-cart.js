'use strict';

const Cart = require('../../models/Cart');

/** Verificar por que não está fazendo a associação com Product_Promotions. */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('cart',
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
        },
        productId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'product',
            key: 'id'
          }
        },
        productPromotionsId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          // references: {
          //   model: 'productPromotions',
          //   key: 'id'
          // }
        },
        productQuantity: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        subTotalPrice: {
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
        tableName: 'cart'
      });

    Cart.associate = (models) => {
      [
        Cart.belongsTo(models.Product, {
          foreignKey: 'productId',
          as: 'product'
        }),
        // Cart.belongsTo(models.ProductPromotions, {
        //   foreignKey: 'productPromotionsId',
        //   as: 'promotion'
        // })
      ]
    };
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('cart');
  }
};
