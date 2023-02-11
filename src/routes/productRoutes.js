const express = require('express');
const Product = require('../controllers/productController');

const router = express.Router();

router.get('/', Product.getProducts);
router.get('/:id/:slug', Product.getSpecificProduct);

module.exports = router;