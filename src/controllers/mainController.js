const { getProducts } = require('../controllers/productController');

const mainController = {
    home: async (req, res) => {

        return res.render('../views/home', { getProducts })
    },
};

module.exports = mainController;