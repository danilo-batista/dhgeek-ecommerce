const express = require('express');
const Product = require('../controllers/productController');
const upload = require("../middlewares/MulterMiddleware");
const { validationToken } = require('../middlewares/userMiddleware');

const router = express.Router();

router.get('/', Product.getProducts);
router.get('/:id/:slug', Product.getProductById);
router.get('/:category', Product.getProductsByCategory);

router.get("/dashboard", validationToken, Product.dashboardProduct);
router.post("/create", validationToken, upload.single("productionBanner"), Product.createProduct);
router.put("/update/:id", validationToken, Product.updateProduct);
router.delete("/delete/:id", validationToken, Product.deleteProduct);

/* em teste ainda */
router.get('/search', Product.getProductsByName);
router.get('/exibir', Product.exibir);
router.get("/dashboard", Product.dashboardProduct);
router.get("/:id", Product.getProductById);
router.get("/dashboard/updateProduct/:id", Product.renderPageUpdate)
router.put("/dashboard/updateProduct/:id", upload.single("productionBanner"), Product.updateProduct);
router.post("/create", upload.single("productionBanner"), Product.createProduct);
router.delete("/dashboard/updateProduct/:id", Product.deleteProduct);


module.exports = router;