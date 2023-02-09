const express = require('express');
const routes = express.Router();

const mainController = require('../controllers/mainController');
const userController = require('../controllers/userController');
const contactController = require('../controllers/contactController');
const productController = require('../controllers/productController');
const cartController = require('../controllers/cartController');
const orderController = require('../controllers/orderController');

const {validationToken} = require("../middlewares/userMiddleware");

routes.get('/', mainController.home);
routes.get('/users', userController.getUsers);
routes.get('/contacts', contactController.getMessages);
routes.get('/products', productController.getProducts);
routes.get('/cart',  cartController.getProducts);
routes.get('/cartExample', validationToken, cartController.cart);
routes.get('/order', orderController.getOrder);

module.exports = routes;