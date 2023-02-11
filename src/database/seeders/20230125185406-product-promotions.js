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
          "productId": 1
        },
        {
          "id": 2,
          "discount": "0",
          "promotionalPrice": 63.9,
          "paymentsConditions": 12,
          "paymentsValues": 6.23,
          "paymentsFee": "sem juros",
          "paymentsShipping": 11.05,
          "productId": 2
        },
        {
          "id": 3,
          "discount": 10,
          "promotionalPrice": 125.91,
          "paymentsConditions": 10,
          "paymentsValues": 12.59,
          "paymentsFee": "sem juros",
          "paymentsShipping": 0,
          "productId": 3
        },
        {
          "id": 4,
          "discount": 10,
          "promotionalPrice": 125.91,
          "paymentsConditions": 10,
          "paymentsValues": 12.59,
          "paymentsFee": "sem juros",
          "paymentsShipping": 0,
          "productId": 4
        },
        {
          "id": 5,
          "discount": 22,
          "promotionalPrice": 132,
          "paymentsConditions": 6,
          "paymentsValues": 22,
          "paymentsFee": "sem juros",
          "paymentsShipping": 0,
          "productId": 5
        },
        {
          "id": 6,
          "discount": 3,
          "promotionalPrice": 87.29,
          "paymentsConditions": 12,
          "paymentsValues": 8.78,
          "paymentsFee": "sem juros",
          "paymentsShipping": 0,
          "productId": 6
        },
        {
          "id": 7,
          "discount": "0",
          "promotionalPrice": 599.90,
          "paymentsConditions": 12,
          "paymentsValues": 58.52,
          "paymentsFee": "sem juros",
          "paymentsShipping": 1.5,
          "productId": 7
        },
        {
          "id": 8,
          "discount": 42,
          "promotionalPrice": 46.34,
          "paymentsConditions": 6,
          "paymentsValues": 7.72,
          "paymentsFee": "sem juros",
          "paymentsShipping": 8.07,
          "productId": 8
        },
        {
          "id": 9,
          "discount": 5,
          "promotionalPrice": 123.40,
          "paymentsConditions": 12,
          "paymentsValues": 12.04,
          "paymentsFee": "sem juros",
          "paymentsShipping": 0,
          "productId": 9
        },
        {
          "id": 10,
          "discount": 0,
          "promotionalPrice": 108,
          "paymentsConditions": 12,
          "paymentsValues": 10.53,
          "paymentsFee": "sem juros",
          "paymentsShipping": 1.99,
          "productId": 10
        },
        {
          "id": 11,
          "discount": 3,
          "promotionalPrice": 24.99,
          "paymentsConditions": 12,
          "paymentsValues": 2.44,
          "paymentsFee": "sem juros",
          "paymentsShipping": 7.65,
          "productId": 11
        },
        {
          "id": 12,
          "discount": 10,
          "promotionalPrice": 58.29,
          "paymentsConditions": 12,
          "paymentsValues": 5.69,
          "paymentsFee": "sem juros",
          "paymentsShipping": 1.99,
          "productId": 12
        },
        {
          "id": 13,
          "discount": 9,
          "promotionalPrice": 45.49,
          "paymentsConditions": 12,
          "paymentsValues": 4.44,
          "paymentsFee": "sem juros",
          "paymentsShipping": 15.90,
          "productId": 13
        },
        {
          "id": 14,
          "discount": 1,
          "promotionalPrice": 791.90,
          "paymentsConditions": 12,
          "paymentsValues": 66,
          "paymentsFee": "sem juros",
          "paymentsShipping": 2.99,
          "productId": 14
        },
        {
          "id": 15,
          "discount": 0,
          "promotionalPrice": 439.78,
          "paymentsConditions": 12,
          "paymentsValues": 42.89,
          "paymentsFee": "sem juros",
          "paymentsShipping": 0,
          "productId": 15
        },
        {
          "id": 16,
          "discount": 10,
          "promotionalPrice": 161.21,
          "paymentsConditions": 12,
          "paymentsValues": 15.72,
          "paymentsFee": "sem juros",
          "paymentsShipping": 0,
          "productId": 16
        },
        {
          "id": 17,
          "discount": 10,
          "promotionalPrice": 89.91,
          "paymentsConditions": 12,
          "paymentsValues": 7.49,
          "paymentsFee": "sem juros",
          "paymentsShipping": 0,
          "productId": 17
        },
        {
          "id": 18,
          "discount": 0,
          "promotionalPrice": 69.9,
          "paymentsConditions": 12,
          "paymentsValues": 6.82,
          "paymentsFee": "sem juros",
          "paymentsShipping": 10.28,
          "productId": 18
        },
        {
          "id": 19,
          "discount": 14,
          "promotionalPrice": 152.46,
          "paymentsConditions": 12,
          "paymentsValues": 14.87,
          "paymentsFee": "sem juros",
          "paymentsShipping": 0,
          "productId": 19
        },
        {
          "id": 20,
          "discount": 28,
          "promotionalPrice": 179.99,
          "paymentsConditions": 12,
          "paymentsValues": 17.56,
          "paymentsFee": "sem juros",
          "paymentsShipping": 0,
          "productId": 20
        },
        {
          "id": 21,
          "discount": 0,
          "promotionalPrice": 17.35,
          "paymentsConditions": 12,
          "paymentsValues": 1.69,
          "paymentsFee": "sem juros",
          "paymentsShipping": 0,
          "productId": 21
        },
        {
          "id": 22,
          "discount": 8,
          "promotionalPrice": 549.9,
          "paymentsConditions": 10,
          "paymentsValues": 54.99,
          "paymentsFee": "sem juros",
          "paymentsShipping": 44.03,
          "productId": 22
        },
        {
          "id": 23,
          "discount": 19,
          "promotionalPrice": 96.51,
          "paymentsConditions": 12,
          "paymentsValues": 9.41,
          "paymentsFee": "sem juros",
          "paymentsShipping": 1,
          "productId": 23
        },
        {
          "id": 24,
          "discount": 0,
          "promotionalPrice": 129.99,
          "paymentsConditions": 12,
          "paymentsValues": 12.68,
          "paymentsFee": "sem juros",
          "paymentsShipping": 1.99,
          "productId": 24
        },
        {
          "id": 25,
          "discount": 10,
          "promotionalPrice": 112.41,
          "paymentsConditions": 6,
          "paymentsValues": 18.74,
          "paymentsFee": "sem juros",
          "paymentsShipping": 0,
          "productId": 25
        },
        {
          "id": 26,
          "discount": 0,
          "promotionalPrice": 434,
          "paymentsConditions": 12,
          "paymentsValues": 42.33,
          "paymentsFee": "sem juros",
          "paymentsShipping": 0,
          "productId": 26
        },
        {
          "id": 27,
          "discount": 7,
          "promotionalPrice": 46.49,
          "paymentsConditions": 12,
          "paymentsValues": 4.53,
          "paymentsFee": "sem juros",
          "paymentsShipping": 9,
          "productId": 27
        },
        {
          "id": 28,
          "discount": 10,
          "promotionalPrice": 1207,
          "paymentsConditions": 10,
          "paymentsValues": 120.70,
          "paymentsFee": "sem juros",
          "paymentsShipping": 0,
          "productId": 28
        }
      ], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('product_promotions', null, {});
  }
};
