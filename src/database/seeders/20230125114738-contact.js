'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('contact',
      [
        {
          "id": 1,
          "email": "vitae.nibh@google.com",
          "message": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur sed tortor. Integer aliquam adipiscing lacus. Ut nec urna"
        },
        {
          "id": 2,
          "email": "et.pede@google.com",
          "message": "Lorem ipsum dolor sit amet, consectetuer"
        },
        {
          "id": 3,
          "email": "ornare@hotmail.com",
          "message": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur sed tortor. Integer"
        },
        {
          "id": 4,
          "email": "convallis.in@icloud.com",
          "message": "Lorem ipsum dolor sit amet, consectetuer"
        },
        {
          "id": 5,
          "email": "sed.nunc@outlook.com",
          "message": "Lorem ipsum dolor sit amet, consectetuer adipiscing"
        },
        {
          "id": 6,
          "email": "neque.venenatis.lacus@google.com",
          "message": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur sed tortor. Integer aliquam adipiscing lacus."
        },
        {
          "id": 7,
          "email": "penatibus.et@outlook.com",
          "message": "Lorem ipsum dolor sit amet, consectetuer adipiscing"
        },
        {
          "id": 8,
          "email": "in.molestie.tortor@outlook.com",
          "message": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur sed tortor. Integer aliquam adipiscing lacus."
        },
        {
          "id": 9,
          "email": "est@outlook.com",
          "message": "Lorem ipsum dolor sit amet,"
        },
        {
          "id": 10,
          "email": "sit@outlook.com",
          "message": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur sed tortor. Integer aliquam adipiscing lacus. Ut nec urna et"
        },
        {
          "id": 11,
          "email": "rutrum.non.hendrerit@hotmail.com",
          "message": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur"
        },
        {
          "id": 12,
          "email": "nulla.eu@hotmail.com",
          "message": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur sed tortor. Integer aliquam"
        },
        {
          "id": 13,
          "email": "quam.curabitur@icloud.com",
          "message": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur sed tortor."
        },
        {
          "id": 14,
          "email": "nec.tellus@icloud.com",
          "message": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur sed tortor. Integer aliquam adipiscing lacus."
        },
        {
          "id": 15,
          "email": "in@outlook.com",
          "message": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur sed tortor. Integer"
        },
        {
          "id": 16,
          "email": "felis.orci.adipiscing@google.com",
          "message": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur sed"
        },
        {
          "id": 17,
          "email": "nec.tempus@google.com",
          "message": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur sed tortor. Integer aliquam adipiscing"
        },
        {
          "id": 18,
          "email": "sit.amet@outlook.com",
          "message": "Lorem ipsum dolor sit amet,"
        },
        {
          "id": 19,
          "email": "vestibulum.massa.rutrum@hotmail.com",
          "message": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur sed tortor. Integer aliquam adipiscing"
        },
        {
          "id": 20,
          "email": "donec.porttitor@google.com",
          "message": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur sed tortor. Integer aliquam adipiscing lacus. Ut nec urna"
        }
      ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('contact', null, {});
  }
};
