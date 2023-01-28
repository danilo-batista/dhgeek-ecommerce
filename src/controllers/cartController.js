const database = require('../models/index');

const cartController = {
    cart: (req, res) => {
        res.render('../views/cart/');
    },
    getProducts: (req, res) => {
        database.Cart.findAll(
            {
                order: [['id', 'ASC']],
                include: [{
                    model: database.Product,
                    as: 'product',
                    required: true
                }]
            }
        ).then((data) => { res.json(data); });
    },
};

module.exports = cartController;