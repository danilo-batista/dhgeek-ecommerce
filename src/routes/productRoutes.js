const express = require('express');
const Product = require('../controllers/productController');
const upload = require("../middlewares/MulterMiddleware");
const { validationToken, validationAdmin } = require('../middlewares/userMiddleware');

const router = express.Router();

router.get("/dashboard", validationToken, validationAdmin,  Product.dashboardProduct);
router.get('/', Product.getProducts);
router.get('/:id/:slug', Product.getProductById);
router.get('/:category', Product.getProductsByCategory);

router.post("/create", validationToken, upload.fields([{name:"productionBanner", maxCount: 1}, {name:"path", maxCount: 1}]), Product.createProduct);
router.get("/dashboard/updateProduct/:id", validationToken, validationAdmin, Product.renderPageUpdate)
router.put("/dashboard/updateProduct/:id", validationToken, upload.fields([{name:"productionBanner", maxCount: 1}, {name:"path", maxCount: 1}]), Product.updateProduct);
router.delete("/dashboard/updateProduct/:id", validationToken, Product.deleteProduct);

/* em teste ainda */
router.get('/search', Product.getProductsByName);

module.exports = router;