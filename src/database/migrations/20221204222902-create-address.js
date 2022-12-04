'use strict';

const Address = require('../../models/Address')

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('address',
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
        },
        cep: {
          type: Sequelize.STRING(8),
          allowNull: false
        },
        address: {
          type: Sequelize.STRING(40),
          allowNull: false
        },
        number: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        city: {
          type: Sequelize.STRING(40),
          allowNull: false
        },
        uf: {
          type: Sequelize.STRING(2),
          allowNull: false
        },
        complement: {
          type: Sequelize.STRING(40),
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
        underscored: true,
        freezeTableName: true,
        tableName: 'address'
      });

    Address.associate = (models) => {
      Address.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user'
      })
    };
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('address');
  }
};
