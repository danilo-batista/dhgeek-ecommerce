const express = require('express');
const Product = require('../controllers/productController');
const upload = require("../middlewares/MulterMiddleware");
const { validationToken } = require('../middlewares/userMiddleware');

const router = express.Router();

router.get('/', Product.getProducts);
router.get('/:id/:slug', Product.getProductById);

router.get("/dashboard", validationToken, Product.dashboardProduct);
router.post("/create", validationToken, upload.single("productionBanner"), Product.createProduct);
router.put("/update/:id", validationToken, Product.updateProduct);
router.delete("/delete/:id", validationToken, Product.deleteProduct);

/* em teste ainda */
router.get('/todos/:category', Product.getProductsByCategory);

module.exports = router;