'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('cart',
      [
        {
          "id": 1,
          "productId": 1,
          "productPromotionsId": 1,
          "productQuantity": 5,
          "subTotalPrice": 15000
        },
      ], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('cart', null, {});
  }
};
