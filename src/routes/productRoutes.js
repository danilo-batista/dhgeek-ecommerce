const express = require('express');
const Product = require('../controllers/productController');

const router = express.Router();

router.get('/exibir', Product.exibir);

module.exports = router;