'use strict';

const ProductPromotions = require('../../models/ProductPromotions');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('product_promotions',
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
        },
        discount: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        promotionalPrice: {
          type: Sequelize.DECIMAL(11, 2),
          allowNull: false
        },
        paymentsConditions: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        paymentsValues: {
          type: Sequelize.DECIMAL(11, 2),
          allowNull: false
        },
        paymentsFee: {
          type: Sequelize.STRING(10),
          allowNull: false
        },
        paymentsShipping: {
          type: Sequelize.FLOAT(4, 2),
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
        tableName: 'product_promotions'
      });

    ProductPromotions.associate = (models) => {
      [
        ProductPromotions.belongsTo(models.Product, {
          foreignKey: 'productId',
          as: 'product'
        }),
        ProductPromotions.hasMany(models.Cart, {
          foreignKey: 'productPromotionsId',
          as: 'cart'
        })
      ]
    };
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('product_promotions');
  }
};
