const express = require('express');
const routes = express.Router();

const mainController = require('../controllers/mainController');
const userController = require('../controllers/userController');

routes.get('/', mainController.home);
routes.get('/users', userController.getUsers)

module.exports = routes;