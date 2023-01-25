const express = require('express');
const routes = express.Router();

const mainController = require('../controllers/mainController');
const userController = require('../controllers/userController');
const contactController = require('../controllers/contactController');
const productController = require('../controllers/productController');

routes.get('/', mainController.home);
routes.get('/users', userController.getUsers);
routes.get('/contacts', contactController.getMessages);
routes.get('/products', productController.getProducts);

module.exports = routes;