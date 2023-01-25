'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('order',
      [
        {
          "id": 1,
          "cartId": 1,
          "userId": 5,
          "deliveryDate": "2023-04-08 02:47:35",
          "totalPrice": 4.342
        },
      ], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('order', null, {});
  }
};
