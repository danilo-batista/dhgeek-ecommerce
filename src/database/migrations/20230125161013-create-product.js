'use strict';

const Product = require('../../models/Product');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('product',
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
        },
        name: {
          type: Sequelize.STRING(255),
          allowNull: false
        },
        slug: {
          type: Sequelize.STRING(255),
          allowNull: false
        },
        title: {
          type: Sequelize.STRING(255),
          allowNull: false
        },
        category: {
          type: Sequelize.STRING(40),
          allowNull: false
        },
        department: {
          type: Sequelize.STRING(40),
          allowNull: false
        },
        productionBanner: {
          type: Sequelize.STRING(255),
          allowNull: false
        },
        description: {
          type: Sequelize.TEXT,
          allowNull: false
        },
        manufacturer: {
          type: Sequelize.STRING(40),
          allowNull: false
        },
        brand: {
          type: Sequelize.STRING(20),
          allowNull: false
        },
        character: {
          type: Sequelize.STRING(20),
          allowNull: false
        },
        material: {
          type: Sequelize.STRING(20),
          allowNull: false
        },
        weight: {
          type: Sequelize.FLOAT(4, 2),
          allowNull: false
        },
        height: {
          type: Sequelize.FLOAT(4, 2),
          allowNull: false
        },
        width: {
          type: Sequelize.FLOAT(4, 2),
          allowNull: false
        },
        depth: {
          type: Sequelize.FLOAT(4, 2),
          allowNull: false
        },
        fullPrice: {
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
        tableName: 'product'
      });

    Product.associate = (models) => {
      [
        Product.hasMany(models.ProductImages, {
          foreignKey: 'productId',
          as: 'productImages'
        }),
        Product.hasMany(models.ProductPromotions, {
          foreignKey: 'productId',
          as: 'productPromotions'
        }),
        Product.hasMany(models.Cart, {
          foreignKey: 'productId',
          as: 'cart'
        })
      ]
    };
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('product');
  }
};
