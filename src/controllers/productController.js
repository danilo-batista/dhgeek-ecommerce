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
                }]
            }
        ).then((data) => { res.json(data); });
    },
};

module.exports = productController;