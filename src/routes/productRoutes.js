const express = require('express');
const Product = require('../controllers/productController');
const upload = require("../middlewares/MulterMiddleware")



const router = express.Router();

router.get('/exibir', Product.exibir);
router.get("/dashboard", Product.dashboardProduct);
router.get("/:id", Product.getProductById);
router.get("/dashboard/updateProduct/:id", Product.renderPageUpdate)
router.put("/dashboard/updateProduct/:id", upload.single("productionBanner"), Product.updateProduct);
router.post("/create", upload.single("productionBanner"), Product.createProduct);
router.delete("/dashboard/updateProduct/:id", Product.deleteProduct);


module.exports = router;