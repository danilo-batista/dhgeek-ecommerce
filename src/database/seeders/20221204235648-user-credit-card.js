'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('user_credit_card',
      [
        {
          "id": 1,
          "number": "4556251787728473",
          "name": "Jerome Medina",
          "validityMonth": 2,
          "validityYear": 2025,
          "cvv": 708,
          "userId": 15
        },
        {
          "id": 2,
          "number": "5478985672878738",
          "name": "Mikayla Foreman",
          "validityMonth": 4,
          "validityYear": 2026,
          "cvv": 260,
          "userId": 8
        },
        {
          "id": 3,
          "number": "5163933544255552",
          "name": "Nomlanga Mann",
          "validityMonth": 10,
          "validityYear": 2022,
          "cvv": 684,
          "userId": 7
        },
        {
          "id": 4,
          "number": "5273835557546289",
          "name": "Flynn Collier",
          "validityMonth": 8,
          "validityYear": 2025,
          "cvv": 241,
          "userId": 18
        },
        {
          "id": 5,
          "number": "4736555773754746",
          "name": "Lillian Douglas",
          "validityMonth": 3,
          "validityYear": 2025,
          "cvv": 764,
          "userId": 17
        },
        {
          "id": 6,
          "number": "5153294828818678",
          "name": "Lillith Cervantes",
          "validityMonth": 2,
          "validityYear": 2023,
          "cvv": 229,
          "userId": 12
        },
        {
          "id": 7,
          "number": "4024007194821622",
          "name": "Colorado Sexton",
          "validityMonth": 6,
          "validityYear": 2024,
          "cvv": 764,
          "userId": 10
        },
        {
          "id": 8,
          "number": "4539872724911872",
          "name": "Jerry Morales",
          "validityMonth": 9,
          "validityYear": 2028,
          "cvv": 366,
          "userId": 20
        },
        {
          "id": 9,
          "number": "5321479742154741",
          "name": "Denton Douglas",
          "validityMonth": 4,
          "validityYear": 2027,
          "cvv": 754,
          "userId": 7
        },
        {
          "id": 10,
          "number": "5166538656248589",
          "name": "Lester Mills",
          "validityMonth": 10,
          "validityYear": 2026,
          "cvv": 160,
          "userId": 9
        },
        {
          "id": 11,
          "number": "5319747479367460",
          "name": "Melvin Cantrell",
          "validityMonth": 8,
          "validityYear": 2023,
          "cvv": 499,
          "userId": 3
        },
        {
          "id": 12,
          "number": "5471735581644888",
          "name": "Christian Cantu",
          "validityMonth": 7,
          "validityYear": 2027,
          "cvv": 964,
          "userId": 13
        },
        {
          "id": 13,
          "number": "5422338248643763",
          "name": "Perry Allison",
          "validityMonth": 6,
          "validityYear": 2023,
          "cvv": 239,
          "userId": 9
        },
        {
          "id": 14,
          "number": "5279834592869735",
          "name": "Idona Robinson",
          "validityMonth": 12,
          "validityYear": 2025,
          "cvv": 710,
          "userId": 13
        },
        {
          "id": 15,
          "number": "5273442317587222",
          "name": "Evelyn Carver",
          "validityMonth": 4,
          "validityYear": 2027,
          "cvv": 766,
          "userId": 4
        },
        {
          "id": 16,
          "number": "5228433953288254",
          "name": "Herman Chapman",
          "validityMonth": 10,
          "validityYear": 2026,
          "cvv": 520,
          "userId": 1
        },
        {
          "id": 17,
          "number": "4024007158422342",
          "name": "Caldwell Cross",
          "validityMonth": 11,
          "validityYear": 2026,
          "cvv": 801,
          "userId": 6
        },
        {
          "id": 18,
          "number": "5197266341286896",
          "name": "Sharon Barlow",
          "validityMonth": 2,
          "validityYear": 2025,
          "cvv": 924,
          "userId": 19
        },
        {
          "id": 19,
          "number": "4556432155244141",
          "name": "Ella Hull",
          "validityMonth": 12,
          "validityYear": 2022,
          "cvv": 763,
          "userId": 10
        },
        {
          "id": 20,
          "number": "4024007144967863",
          "name": "Nehru Carney",
          "validityMonth": 7,
          "validityYear": 2027,
          "cvv": 756,
          "userId": 13
        }
      ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('user_credit_card', null, {});
  }
};
