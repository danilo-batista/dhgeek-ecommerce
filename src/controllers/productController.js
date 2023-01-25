const database = require('../models/index');

const productController = {
    getProducts: (req, res) => {
        database.Product.findAll(
            {
                order: [['id', 'ASC']],
            }
        ).then((data) => { res.json(data); });
    },
};

module.exports = productController;