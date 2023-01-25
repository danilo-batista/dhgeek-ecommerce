'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('product_promotions',
      [
        {
          "id": 1,
          "discount": 10,
          "promotionalPrice": 2700,
          "paymentsConditions": 10,
          "paymentsValues": 270,
          "paymentsFee": "sem juros",
          "paymentsShipping": 27.5,
          "productId": 1,
        }
      ], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('product_promotions', null, {});
  }
};
