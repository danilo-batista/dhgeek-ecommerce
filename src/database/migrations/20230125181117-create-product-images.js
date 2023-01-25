'use strict';

const ProductImages = require('../../models/ProductImages');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('product_images',
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
        },
        path: {
          type: Sequelize.STRING(255),
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
        tableName: 'product_images'
      });

    ProductImages.associate = (models) => {
      [
        ProductImages.belongsTo(models.Product, {
          foreignKey: 'productId',
          as: 'product'
        })
      ]
    };
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('product_images');
  }
};
