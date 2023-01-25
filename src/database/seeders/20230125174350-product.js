'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('product',
      [
        {
          "id": 1,
          "name": "Estátua Figura The Child Na Cadeira Baby Yoda Mandalorian",
          "slug": "estatua-figura-the-child-na-cadeira-baby-yoda-mandalorian",
          "title": "Estátua The Child Baby Yoda",
          "category": "StarWars",
          "department": "Decoração",
          "productionBanner": "/public/images/banners-ads/ads-starwars-products.png",
          "description": "Prepare-se para o hiperespaço! A estrela emergente de The Mandalorian no Disney Plus é definitivamente a criança, e ela merece sua honra nesta nova estátua em escala 1/2! Sentado no banco do passageiro do Razor Crest, segurando seu botão de controle de prata favorito em sua mão, o Child será o complemento perfeito para a coleção de qualquer fã do Mandalorian. Medindo aproximadamente 30 centímetros de altura, ele vem embalado em uma caixa de janela colorida e inclui um certificado de autenticidade numerado. Desenhado por Joe Allard e esculpido por Jorge Santos Souza. Imagem meramente ilustrativa.",
          "manufacturer": "Diamond Select",
          "brand": "StarWars",
          "character": "Baby Yoda",
          "material": "resina",
          "weight": 5.62,
          "height": 37,
          "width": 25,
          "depth": 24.5,
          "fullPrice": 3000
        }
      ], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('product', null, {});
  }
};
