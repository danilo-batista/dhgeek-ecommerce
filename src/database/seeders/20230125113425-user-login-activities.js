'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('user_login_activities',
      [
        {
          "id": 1,
          "userId": 13
        },
        {
          "id": 2,
          "userId": 6
        },
        {
          "id": 3,
          "userId": 6
        },
        {
          "id": 4,
          "userId": 13
        },
        {
          "id": 5,
          "userId": 13
        },
        {
          "id": 6,
          "userId": 4
        },
        {
          "id": 7,
          "userId": 16
        },
        {
          "id": 8,
          "userId": 7
        },
        {
          "id": 9,
          "userId": 8
        },
        {
          "id": 10,
          "userId": 15
        },
        {
          "id": 11,
          "userId": 7
        },
        {
          "id": 12,
          "userId": 14
        },
        {
          "id": 13,
          "userId": 8
        },
        {
          "id": 14,
          "userId": 5
        },
        {
          "id": 15,
          "userId": 7
        },
        {
          "id": 16,
          "userId": 1
        },
        {
          "id": 17,
          "userId": 4
        },
        {
          "id": 18,
          "userId": 15
        },
        {
          "id": 19,
          "userId": 15
        },
        {
          "id": 20,
          "userId": 2
        }
      ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('user_login_activities', null, {});
  }
};
