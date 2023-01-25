const database = require('../models/index');

const orderController = {
    getOrder: (req, res) => {
        database.Order.findAll(
            {
                order: [['id', 'ASC']],
                include: [{
                    model: database.Cart,
                    as: 'cart',
                    required: true
                }]
            }
        ).then((data) => { res.json(data); });
    },
};

module.exports = orderController;