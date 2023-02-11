const express = require('express');
const routes = express.Router();

const mainController = require('../controllers/mainController');
const contactController = require('../controllers/contactController');
const cartController = require('../controllers/cartController');
const orderController = require('../controllers/orderController');

const { validationToken } = require("../middlewares/userMiddleware");

routes.get('/', mainController.home);
routes.get('/contacts', contactController.getMessages);
routes.get('/cart', cartController.getProducts);
routes.get('/cartExample', validationToken, cartController.cart);
routes.get('/order', orderController.getOrder);

module.exports = routes;