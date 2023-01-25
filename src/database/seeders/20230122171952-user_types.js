'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('user_types',
      [
        {
          id: 1,
          type: "admin"
        },
        {
          id: 2,
          type: "employee"
        },
        {
          id: 3,
          type: "client"
        }
      ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('user_types', null, {});
  }
};
