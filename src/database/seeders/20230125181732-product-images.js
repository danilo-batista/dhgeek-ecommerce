'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('product_images',
      [
        {
          "id": 1,
          "path": "/public/images/products-categories/starwars/estatua-the-child-baby-yoda-mandalorian.webp",
          "productId": 1,
        },
        {
          "id": 2,
          "path": "/public/images/products-categories/starwars/estatua-the-child-baby-yoda-mandalorian-image2-2x.webp",
          "productId": 1,
        },
        {
          "id": 3,
          "path": "/public/images/products-categories/starwars/estatua-the-child-baby-yoda-mandalorian-image3-2x.webp",
          "productId": 1,
        },
        {
          "id": 4,
          "path": "/public/images/products-categories/starwars/estatua-the-child-baby-yoda-mandalorian-image4-2x.webp",
          "productId": 1,
        },
      ], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('product_images', null, {});
  }
};
