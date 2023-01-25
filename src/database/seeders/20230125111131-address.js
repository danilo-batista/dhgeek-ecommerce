'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('address',
      [
        {
          "id": 1,
          "cep": "33833827",
          "address": "984-6838 Nec, St.",
          "number": 380,
          "city": "Recife",
          "uf": "MA",
          "complement": "augue id ante dictum cursus.",
          "userId": 13
        },
        {
          "id": 2,
          "cep": "61210558",
          "address": "P.O. Box 970, 320 Sem Avenue",
          "number": 612,
          "city": "João Pessoa",
          "uf": "MG",
          "complement": "urna suscipit nonummy. Fusce",
          "userId": 6
        },
        {
          "id": 3,
          "cep": "81021241",
          "address": "Ap #620-797 Mauris. Street",
          "number": 279,
          "city": "Foz do Iguaçu",
          "uf": "SC",
          "complement": "tellus. Suspendisse",
          "userId": 6
        },
        {
          "id": 4,
          "cep": "51460145",
          "address": "P.O. Box 449, 2872 Risus, St.",
          "number": 967,
          "city": "Florianópolis",
          "uf": "CE",
          "complement": "Duis a",
          "userId": 13
        },
        {
          "id": 5,
          "cep": "76782052",
          "address": "Ap #582-319 Dictum Rd.",
          "number": 583,
          "city": "São Gonçalo",
          "uf": "SP",
          "complement": "magna nec quam.",
          "userId": 13
        },
        {
          "id": 6,
          "cep": "97622082",
          "address": "Ap #933-4551 Donec Rd.",
          "number": 514,
          "city": "Camaragibe",
          "uf": "BA",
          "complement": "sem. Nulla",
          "userId": 4
        },
        {
          "id": 7,
          "cep": "38385901",
          "address": "P.O. Box 113, 5477 Adipiscing Street",
          "number": 570,
          "city": "Juazeiro do Norte",
          "uf": "SC",
          "complement": "Aenean sed pede nec",
          "userId": 16
        },
        {
          "id": 8,
          "cep": "61122118",
          "address": "571-8368 Consequat Street",
          "number": 624,
          "city": "Petrolina",
          "uf": "MG",
          "complement": "sagittis",
          "userId": 7
        },
        {
          "id": 9,
          "cep": "60444341",
          "address": "9910 Nisl. Avenue",
          "number": 634,
          "city": "Vitória da Conquista",
          "uf": "SC",
          "complement": "Aliquam adipiscing lobortis risus.",
          "userId": 8
        },
        {
          "id": 10,
          "cep": "44373776",
          "address": "Ap #912-4340 Vestibulum Ave",
          "number": 392,
          "city": "Feira de Santana",
          "uf": "MA",
          "complement": "orci sem eget massa.",
          "userId": 15
        },
        {
          "id": 11,
          "cep": "56326834",
          "address": "784-5601 Fames Road",
          "number": 642,
          "city": "Camaragibe",
          "uf": "RJ",
          "complement": "tincidunt tempus risus.",
          "userId": 7
        },
        {
          "id": 12,
          "cep": "89685124",
          "address": "624-593 Vulputate St.",
          "number": 646,
          "city": "Imperatriz",
          "uf": "SP",
          "complement": "pede, ultrices a,",
          "userId": 14
        },
        {
          "id": 13,
          "cep": "67716364",
          "address": "3265 At, Avenue",
          "number": 572,
          "city": "Crato",
          "uf": "RJ",
          "complement": "interdum. Sed",
          "userId": 8
        },
        {
          "id": 14,
          "cep": "46288792",
          "address": "Ap #909-7979 Pede Avenue",
          "number": 305,
          "city": "Sete Lagoas",
          "uf": "CE",
          "complement": "in, hendrerit",
          "userId": 5
        },
        {
          "id": 15,
          "cep": "18843723",
          "address": "667-4630 Id, Avenue",
          "number": 845,
          "city": "Divinópolis",
          "uf": "PA",
          "complement": "velit. Sed malesuada augue ut",
          "userId": 7
        },
        {
          "id": 16,
          "cep": "74759107",
          "address": "P.O. Box 666, 9098 Morbi Road",
          "number": 668,
          "city": "Juazeiro do Norte",
          "uf": "MA",
          "complement": "taciti sociosqu",
          "userId": 1
        },
        {
          "id": 17,
          "cep": "60558169",
          "address": "568-4169 Curabitur Rd.",
          "number": 727,
          "city": "Santarém",
          "uf": "BA",
          "complement": "nibh sit amet",
          "userId": 4
        },
        {
          "id": 18,
          "cep": "67685110",
          "address": "P.O. Box 381, 9162 Nibh St.",
          "number": 931,
          "city": "Belo Horizonte",
          "uf": "RJ",
          "complement": "congue. In",
          "userId": 15
        },
        {
          "id": 19,
          "cep": "58198015",
          "address": "1941 Magnis St.",
          "number": 6,
          "city": "Itajaí",
          "uf": "BA",
          "complement": "pretium neque. Morbi quis urna.",
          "userId": 15
        },
        {
          "id": 20,
          "cep": "65842165",
          "address": "407-2661 Posuere, Road",
          "number": 192,
          "city": "Campina Grande",
          "uf": "PR",
          "complement": "Nullam scelerisque neque sed",
          "userId": 2
        }
      ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('address', null, {});
  }
};
