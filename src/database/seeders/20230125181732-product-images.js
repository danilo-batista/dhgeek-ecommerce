'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('product_images',
      [
        {
          "id": 1,
          "path": "/public/images/products-categories/starwars/estatua-figura-the-child-na-cadeira-baby-yoda-mandalorian-image1.webp",
          "productId": 1
        },
        {
          "id": 2,
          "path": "/public/images/products-categories/starwars/estatua-figura-the-child-na-cadeira-baby-yoda-mandalorian-image2.webp",
          "productId": 1
        },
        {
          "id": 3,
          "path": "/public/images/products-categories/starwars/estatua-figura-the-child-na-cadeira-baby-yoda-mandalorian-image3.webp",
          "productId": 1
        },
        {
          "id": 4,
          "path": "/public/images/products-categories/starwars/estatua-figura-the-child-na-cadeira-baby-yoda-mandalorian-image4.webp",
          "productId": 1
        },
        {
          "id": 5,
          "path": "/public/images/products-categories/starwars/livro-starwars-dark-edition-image1.webp",
          "productId": 2
        },
        {
          "id": 6,
          "path": "/public/images/products-categories/starwars/livro-starwars-dark-edition-image2.webp",
          "productId": 2
        },
        {
          "id": 7,
          "path": "/public/images/products-categories/starwars/livro-starwars-dark-edition-image3.webp",
          "productId": 2
        },
        {
          "id": 8,
          "path": "/public/images/products-categories/starwars/livro-starwars-dark-edition-image4.webp",
          "productId": 2
        },
        {
          "id": 9,
          "path": "/public/images/products-categories/starwars/funko-pop-pride-starwars-296-stormtrooper-image1.webp",
          "productId": 3
        },
        {
          "id": 10,
          "path": "/public/images/products-categories/starwars/funko-pop-pride-starwars-296-stormtrooper-image2.webp",
          "productId": 3
        },
        {
          "id": 11,
          "path": "/public/images/products-categories/starwars/funko-pop-pride-starwars-296-stormtrooper-image3.webp",
          "productId": 3
        },
        {
          "id": 12,
          "path": "/public/images/products-categories/starwars/funko-pop-pride-starwars-296-stormtrooper-image4.webp",
          "productId": 3
        },
        {
          "id": 13,
          "path": "/public/images/products-categories/starwars/funko-pop-pride-starwars-456-darth-vader-retro-series-image1.webp",
          "productId": 4
        },
        {
          "id": 14,
          "path": "/public/images/products-categories/starwars/funko-pop-pride-starwars-456-darth-vader-retro-series-image2.webp",
          "productId": 4
        },
        {
          "id": 15,
          "path": "/public/images/products-categories/starwars/funko-pop-pride-starwars-456-darth-vader-retro-series-image3.webp",
          "productId": 4
        },
        {
          "id": 16,
          "path": "/public/images/products-categories/starwars/funko-pop-pride-starwars-456-darth-vader-retro-series-image4.webp",
          "productId": 4
        },
        {
          "id": 17,
          "path": "/public/images/products-categories/starwars/pantufa-3d-chewbacca-starwars-original-solado-de-borracha-image1.webp",
          "productId": 5
        },
        {
          "id": 18,
          "path": "/public/images/products-categories/starwars/pantufa-3d-chewbacca-starwars-original-solado-de-borracha-image2.webp",
          "productId": 5
        },
        {
          "id": 19,
          "path": "/public/images/products-categories/starwars/pantufa-3d-chewbacca-starwars-original-solado-de-borracha-image3.webp",
          "productId": 5
        },
        {
          "id": 20,
          "path": "/public/images/products-categories/starwars/pantufa-3d-chewbacca-starwars-original-solado-de-borracha-image4.webp",
          "productId": 5
        },
        {
          "id": 21,
          "path": "/public/images/products-categories/starwars/lego-starwars-75295-microfighter-millennium-falcon-101-pcs-image1.webp",
          "productId": 6
        },
        {
          "id": 22,
          "path": "/public/images/products-categories/starwars/lego-starwars-75295-microfighter-millennium-falcon-101-pcs-image2.webp",
          "productId": 6
        },
        {
          "id": 23,
          "path": "/public/images/products-categories/starwars/lego-starwars-75295-microfighter-millennium-falcon-101-pcs-image3.webp",
          "productId": 6
        },
        {
          "id": 24,
          "path": "/public/images/products-categories/starwars/lego-starwars-75295-microfighter-millennium-falcon-101-pcs-image4.webp",
          "productId": 6
        },
        {
          "id": 25,
          "path": "/public/images/products-categories/starwars/starwars-edicao-de-40-anos-4lom-e-zuckuss-asbro-e9925-image1.webp",
          "productId": 7
        },
        {
          "id": 26,
          "path": "/public/images/products-categories/starwars/starwars-edicao-de-40-anos-4lom-e-zuckuss-asbro-e9925-image2.webp",
          "productId": 7
        },
        {
          "id": 27,
          "path": "/public/images/products-categories/starwars/starwars-edicao-de-40-anos-4lom-e-zuckuss-asbro-e9925-image3.webp",
          "productId": 7
        },
        {
          "id": 28,
          "path": "/public/images/products-categories/starwars/starwars-edicao-de-40-anos-4lom-e-zuckuss-asbro-e9925-image4.webp",
          "productId": 7
        },
        {
          "id": 29,
          "path": "/public/images/products-categories/marvel/capa-anti-impacto-slim-samsung-galaxy-a12-marvel-vingadores-image1.webp",
          "productId": 8
        },
        {
          "id": 30,
          "path": "/public/images/products-categories/marvel/capa-anti-impacto-slim-samsung-galaxy-a12-marvel-vingadores-image2.webp",
          "productId": 8
        },
        {
          "id": 31,
          "path": "/public/images/products-categories/marvel/capa-anti-impacto-slim-samsung-galaxy-a12-marvel-vingadores-image3.webp",
          "productId": 8
        },
        {
          "id": 32,
          "path": "/public/images/products-categories/marvel/capa-anti-impacto-slim-samsung-galaxy-a12-marvel-vingadores-image4.webp",
          "productId": 8
        },
        {
          "id": 33,
          "path": "/public/images/products-categories/marvel/boneco-marvel-loki-avengers-hasbro-titan-hero-series-image1.webp",
          "productId": 9
        },
        {
          "id": 34,
          "path": "/public/images/products-categories/marvel/boneco-marvel-loki-avengers-hasbro-titan-hero-series-image2.webp",
          "productId": 9
        },
        {
          "id": 35,
          "path": "/public/images/products-categories/marvel/boneco-marvel-loki-avengers-hasbro-titan-hero-series-image3.webp",
          "productId": 9
        },
        {
          "id": 36,
          "path": "/public/images/products-categories/marvel/boneco-marvel-loki-avengers-hasbro-titan-hero-series-image4.webp",
          "productId": 9
        },
        {
          "id": 37,
          "path": "/public/images/products-categories/marvel/marvels-spider-man-miles-morales-standard-edition-sony-ps5-fisico-image1.webp",
          "productId": 10
        },
        {
          "id": 38,
          "path": "/public/images/products-categories/marvel/marvels-spider-man-miles-morales-standard-edition-sony-ps5-fisico-image2.webp",
          "productId": 10
        },
        {
          "id": 39,
          "path": "/public/images/products-categories/marvel/marvels-spider-man-miles-morales-standard-edition-sony-ps5-fisico-image3.webp",
          "productId": 10
        },
        {
          "id": 40,
          "path": "/public/images/products-categories/marvel/marvels-spider-man-miles-morales-standard-edition-sony-ps5-fisico-image4.webp",
          "productId": 10
        },
        {
          "id": 41,
          "path": "/public/images/products-categories/princess/quebra-cabeca-disney-frozen-200-pecas-toyster-8033-image1.webp",
          "productId": 11
        },
        {
          "id": 42,
          "path": "/public/images/products-categories/princess/quebra-cabeca-disney-frozen-200-pecas-toyster-8033-image2.webp",
          "productId": 11
        },
        {
          "id": 43,
          "path": "/public/images/products-categories/princess/quebra-cabeca-disney-frozen-200-pecas-toyster-8033-image3.webp",
          "productId": 11
        },
        {
          "id": 44,
          "path": "/public/images/products-categories/princess/quebra-cabeca-disney-frozen-200-pecas-toyster-8033-image4.webp",
          "productId": 11
        },
        {
          "id": 45,
          "path": "/public/images/products-categories/princess/boneca-princesa-disney-mulan-e8633-traje-guerreira-hasbro-image1.webp",
          "productId": 12
        },
        {
          "id": 46,
          "path": "/public/images/products-categories/princess/boneca-princesa-disney-mulan-e8633-traje-guerreira-hasbro-image2.webp",
          "productId": 12
        },
        {
          "id": 47,
          "path": "/public/images/products-categories/princess/boneca-princesa-disney-mulan-e8633-traje-guerreira-hasbro-image3.webp",
          "productId": 12
        },
        {
          "id": 48,
          "path": "/public/images/products-categories/princess/boneca-princesa-disney-mulan-e8633-traje-guerreira-hasbro-image4.webp",
          "productId": 12
        },
        {
          "id": 49,
          "path": "/public/images/products-categories/princess/chinelo-havaianas-slim-princesas-disney-feminina-image1.webp",
          "productId": 13
        },
        {
          "id": 50,
          "path": "/public/images/products-categories/princess/chinelo-havaianas-slim-princesas-disney-feminina-image2.webp",
          "productId": 13
        },
        {
          "id": 51,
          "path": "/public/images/products-categories/princess/chinelo-havaianas-slim-princesas-disney-feminina-image3.webp",
          "productId": 13
        },
        {
          "id": 52,
          "path": "/public/images/products-categories/princess/chinelo-havaianas-slim-princesas-disney-feminina-image4.webp",
          "productId": 13
        },
        {
          "id": 53,
          "path": "/public/images/products-categories/princess/bicicleta-infantil-aro16-princesas-disney-nathor-image1.webp",
          "productId": 14
        },
        {
          "id": 54,
          "path": "/public/images/products-categories/princess/bicicleta-infantil-aro16-princesas-disney-nathor-image2.webp",
          "productId": 14
        },
        {
          "id": 55,
          "path": "/public/images/products-categories/princess/bicicleta-infantil-aro16-princesas-disney-nathor-image3.webp",
          "productId": 14
        },
        {
          "id": 56,
          "path": "/public/images/products-categories/princess/bicicleta-infantil-aro16-princesas-disney-nathor-image4.webp",
          "productId": 14
        },
        {
          "id": 57,
          "path": "/public/images/products-categories/princess/lego-princesas-43188-disney-casa-da-aurora-bela-adormecida-image1.webp",
          "productId": 15
        },
        {
          "id": 58,
          "path": "/public/images/products-categories/princess/lego-princesas-43188-disney-casa-da-aurora-bela-adormecida-image2.webp",
          "productId": 15
        },
        {
          "id": 59,
          "path": "/public/images/products-categories/princess/lego-princesas-43188-disney-casa-da-aurora-bela-adormecida-image3.webp",
          "productId": 15
        },
        {
          "id": 60,
          "path": "/public/images/products-categories/princess/lego-princesas-43188-disney-casa-da-aurora-bela-adormecida-image4.webp",
          "productId": 15
        },
        {
          "id": 61,
          "path": "/public/images/products-categories/princess/escova-eletrica-oral-b-princesas-disney-com-2-pilhas-AA-image1.webp",
          "productId": 16
        },
        {
          "id": 62,
          "path": "/public/images/products-categories/princess/escova-eletrica-oral-b-princesas-disney-com-2-pilhas-AA-image2.webp",
          "productId": 16
        },
        {
          "id": 63,
          "path": "/public/images/products-categories/princess/escova-eletrica-oral-b-princesas-disney-com-2-pilhas-AA-image3.webp",
          "productId": 16
        },
        {
          "id": 64,
          "path": "/public/images/products-categories/princess/escova-eletrica-oral-b-princesas-disney-com-2-pilhas-AA-image4.webp",
          "productId": 16
        },
        {
          "id": 65,
          "path": "/public/images/products-categories/princess/fichario-caderno-argolado-escolar-princesas-disney-image1.webp",
          "productId": 17
        },
        {
          "id": 66,
          "path": "/public/images/products-categories/princess/fichario-caderno-argolado-escolar-princesas-disney-image2.webp",
          "productId": 17
        },
        {
          "id": 67,
          "path": "/public/images/products-categories/princess/fichario-caderno-argolado-escolar-princesas-disney-image3.webp",
          "productId": 17
        },
        {
          "id": 68,
          "path": "/public/images/products-categories/princess/fichario-caderno-argolado-escolar-princesas-disney-image4.webp",
          "productId": 17
        },
        {
          "id": 69,
          "path": "/public/images/products-categories/princess/caneca-3d-pantera-negra-marvel-original-image1.webp",
          "productId": 18
        },
        {
          "id": 70,
          "path": "/public/images/products-categories/princess/caneca-3d-pantera-negra-marvel-original-image2.webp",
          "productId": 18
        },
        {
          "id": 71,
          "path": "/public/images/products-categories/princess/caneca-3d-pantera-negra-marvel-original-image3.webp",
          "productId": 18
        },
        {
          "id": 72,
          "path": "/public/images/products-categories/princess/caneca-3d-pantera-negra-marvel-original-image4.webp",
          "productId": 18
        },
        {
          "id": 73,
          "path": "/public/images/products-categories/marvel/funko-pop-visao-anos70-718-wandavision-marvel-image1.webp",
          "productId": 19
        },
        {
          "id": 74,
          "path": "/public/images/products-categories/marvel/funko-pop-visao-anos70-718-wandavision-marvel-image2.webp",
          "productId": 19
        },
        {
          "id": 75,
          "path": "/public/images/products-categories/marvel/funko-pop-visao-anos70-718-wandavision-marvel-image3.webp",
          "productId": 19
        },
        {
          "id": 76,
          "path": "/public/images/products-categories/marvel/funko-pop-visao-anos70-718-wandavision-marvel-image4.webp",
          "productId": 19
        },
        {
          "id": 77,
          "path": "/public/images/products-categories/marvel/lego-marvel-os-eternos-emboscada-deviante-76154-197pcs-image1.webp",
          "productId": 20
        },
        {
          "id": 78,
          "path": "/public/images/products-categories/marvel/lego-marvel-os-eternos-emboscada-deviante-76154-197pcs-image2.webp",
          "productId": 20
        },
        {
          "id": 79,
          "path": "/public/images/products-categories/marvel/lego-marvel-os-eternos-emboscada-deviante-76154-197pcs-image3.webp",
          "productId": 20
        },
        {
          "id": 80,
          "path": "/public/images/products-categories/marvel/lego-marvel-os-eternos-emboscada-deviante-76154-197pcs-image4.webp",
          "productId": 20
        },
        {
          "id": 81,
          "path": "/public/images/products-categories/classic/toalhas-umedecidas-huggies-max-clean-48-unidades-image1.webp",
          "productId": 21
        },
        {
          "id": 82,
          "path": "/public/images/products-categories/classic/toalhas-umedecidas-huggies-max-clean-48-unidades-image2.webp",
          "productId": 21
        },
        {
          "id": 83,
          "path": "/public/images/products-categories/classic/toalhas-umedecidas-huggies-max-clean-48-unidades-image3.webp",
          "productId": 21
        },
        {
          "id": 84,
          "path": "/public/images/products-categories/classic/toalhas-umedecidas-huggies-max-clean-48-unidades-image4.webp",
          "productId": 21
        },
        {
          "id": 85,
          "path": "/public/images/products-categories/classic/comoda-infantil-3-gavetas-minnie-disney-fun-cabecasa-image1.webp",
          "productId": 22
        },
        {
          "id": 86,
          "path": "/public/images/products-categories/classic/comoda-infantil-3-gavetas-minnie-disney-fun-cabecasa-image2.webp",
          "productId": 22
        },
        {
          "id": 87,
          "path": "/public/images/products-categories/classic/comoda-infantil-3-gavetas-minnie-disney-fun-cabecasa-image3.webp",
          "productId": 22
        },
        {
          "id": 88,
          "path": "/public/images/products-categories/classic/comoda-infantil-3-gavetas-minnie-disney-fun-cabecasa-image4.webp",
          "productId": 22
        },
        {
          "id": 89,
          "path": "/public/images/products-categories/classic/pantufa-chinelo-solado-borracha-minnie-disney-original-image1.webp",
          "productId": 23
        },
        {
          "id": 90,
          "path": "/public/images/products-categories/classic/pantufa-chinelo-solado-borracha-minnie-disney-original-image2.webp",
          "productId": 23
        },
        {
          "id": 91,
          "path": "/public/images/products-categories/classic/pantufa-chinelo-solado-borracha-minnie-disney-original-image3.webp",
          "productId": 23
        },
        {
          "id": 92,
          "path": "/public/images/products-categories/classic/pantufa-chinelo-solado-borracha-minnie-disney-original-image4.webp",
          "productId": 23
        },
        {
          "id": 93,
          "path": "/public/images/products-categories/classic/quebra-cabeca-disney-mickey-15000-pecas-gameoffice-2715-image1.webp",
          "productId": 24
        },
        {
          "id": 94,
          "path": "/public/images/products-categories/classic/quebra-cabeca-disney-mickey-15000-pecas-gameoffice-2715-image2.webp",
          "productId": 24
        },
        {
          "id": 95,
          "path": "/public/images/products-categories/classic/quebra-cabeca-disney-mickey-15000-pecas-gameoffice-2715-image3.webp",
          "productId": 24
        },
        {
          "id": 96,
          "path": "/public/images/products-categories/classic/quebra-cabeca-disney-mickey-15000-pecas-gameoffice-2715-image4.webp",
          "productId": 24
        },
        {
          "id": 97,
          "path": "/public/images/products-categories/classic/pipoqueira-eletrica-mallory-mickey-com-ar-quente-vermelho-1200w-127v-image1.webp",
          "productId": 25
        },
        {
          "id": 98,
          "path": "/public/images/products-categories/classic/pipoqueira-eletrica-mallory-mickey-com-ar-quente-vermelho-1200w-127v-image2.webp",
          "productId": 25
        },
        {
          "id": 99,
          "path": "/public/images/products-categories/classic/pipoqueira-eletrica-mallory-mickey-com-ar-quente-vermelho-1200w-127v-image3.webp",
          "productId": 25
        },
        {
          "id": 100,
          "path": "/public/images/products-categories/classic/pipoqueira-eletrica-mallory-mickey-com-ar-quente-vermelho-1200w-127v-image4.webp",
          "productId": 25
        },
        {
          "id": 101,
          "path": "/public/images/products-categories/classic/tablet-multi-m7-minnie-nb368-7pol-32gb-preto-1gb-de-memoria-ram-image1.webp",
          "productId": 26
        },
        {
          "id": 102,
          "path": "/public/images/products-categories/classic/tablet-multi-m7-minnie-nb368-7pol-32gb-preto-1gb-de-memoria-ram-image2.webp",
          "productId": 26
        },
        {
          "id": 103,
          "path": "/public/images/products-categories/classic/tablet-multi-m7-minnie-nb368-7pol-32gb-preto-1gb-de-memoria-ram-image3.webp",
          "productId": 26
        },
        {
          "id": 104,
          "path": "/public/images/products-categories/classic/tablet-multi-m7-minnie-nb368-7pol-32gb-preto-1gb-de-memoria-ram-image4.webp",
          "productId": 26
        },
        {
          "id": 105,
          "path": "/public/images/products-categories/classic/kit-2-copos-colors-bico-de-silicone-disney-minnie-rosa-lillo-image1.webp",
          "productId": 27
        },
        {
          "id": 106,
          "path": "/public/images/products-categories/classic/kit-2-copos-colors-bico-de-silicone-disney-minnie-rosa-lillo-image2.webp",
          "productId": 27
        },
        {
          "id": 107,
          "path": "/public/images/products-categories/classic/kit-2-copos-colors-bico-de-silicone-disney-minnie-rosa-lillo-image3.webp",
          "productId": 27
        },
        {
          "id": 108,
          "path": "/public/images/products-categories/classic/kit-2-copos-colors-bico-de-silicone-disney-minnie-rosa-lillo-image4.webp",
          "productId": 27
        },
        {
          "id": 109,
          "path": "/public/images/products-categories/marvel/cadeira-pcGamer-ergonomica-gaming-giratoria-braco-3d-marvel-image1.webp",
          "productId": 28
        },
        {
          "id": 110,
          "path": "/public/images/products-categories/marvel/cadeira-pcGamer-ergonomica-gaming-giratoria-braco-3d-marvel-image2.webp",
          "productId": 28
        },
        {
          "id": 111,
          "path": "/public/images/products-categories/marvel/cadeira-pcGamer-ergonomica-gaming-giratoria-braco-3d-marvel-image3.webp",
          "productId": 28
        },
        {
          "id": 112,
          "path": "/public/images/products-categories/marvel/cadeira-pcGamer-ergonomica-gaming-giratoria-braco-3d-marvel-image4.webp",
          "productId": 28
        }
      ], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('product_images', null, {});
  }
};
