'use strict';

const UserCreditCard = require('../../models/UserCreditCard')

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('user_credit_card',
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
        },
        number: {
          type: Sequelize.STRING(16),
          allowNull: false
        },
        name: {
          type: Sequelize.STRING(255),
          allowNull: false
        },
        nickName: {
          type: Sequelize.STRING(255),
          allowNull: false
        },
        validityMonth: {
          type: Sequelize.STRING(2),
          allowNull: false
        },
        validityYear: {
          type: Sequelize.STRING(4),
          allowNull: false
        },
        cvv: {
          type: Sequelize.STRING(3),
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
        tableName: 'user_credit_card'
      });

    UserCreditCard.associate = (models) => {
      UserCreditCard.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user'
      })
    };
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('user_credit_card');
  }
};
