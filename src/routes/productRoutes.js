const express = require('express');
const Product = require('../controllers/productController');
const upload = require("../middlewares/MulterMiddleware");
const { validationToken } = require('../middlewares/userMiddleware');

const router = express.Router();

router.get('/', Product.getProducts);
router.get('/:id/:slug', Product.getProductById);
router.get('/:category', Product.getProductsByCategory);

router.post("/create", validationToken, upload.single("productionBanner"), Product.createProduct);
router.get("/dashboard", validationToken, Product.dashboardProduct);
router.get("/dashboard/updateProduct/:id", validationToken, Product.renderPageUpdate)
router.put("/dashboard/updateProduct/:id", validationToken, upload.single("productionBanner"), Product.updateProduct);
router.delete("/dashboard/updateProduct/:id", validationToken, Product.deleteProduct);

/* em teste ainda */
router.get('/search', Product.getProductsByName);

module.exports = router;