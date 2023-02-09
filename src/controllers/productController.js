const database = require('../models/index');

const productController = {
    getProducts: (req, res) => {
        database.Product.findAll(
            {
                order: [['id', 'ASC']],
                include: [{
                    model: database.ProductImages,
                    as: 'productImages',
                    required: true
                },
                {
                    model: database.ProductPromotions,
                    as: 'productPromotions',
                    required: true
                }]
            }
        ).then((data) => { res.json(data); });
    },

    exibir: (req, res) => {
        res.render('../views/produto');
    },
};

module.exports = productController;