const express = require('express');
const Product = require('../controllers/productController');

const router = express.Router();

router.get('/', Product.getProducts);
router.get('/:id/:slug', Product.getSpecificProduct);
router.get('/todos/:category', Product.getProductsByCategory);

module.exports = router;