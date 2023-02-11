const express = require('express');
const Product = require('../controllers/productController');
const upload = require("../middlewares/MulterMiddleware")



const router = express.Router();

router.get('/exibir', Product.exibir);
router.get("/dashboard", Product.dashboardProduct);
router.post("/create", upload.single("productionBanner"), Product.createProduct);
router.get("/delete/:id", Product.deleteProduct);
router.put("/update/:id", Product.updateProduct);
router.get("/:id", Product.getProductById);

/* arrumar daqui para baixo */
router.get('/', Product.getProducts);
router.get('/:id/:slug', Product.getSpecificProduct);
router.get('/todos/:category', Product.getProductsByCategory);

module.exports = router;