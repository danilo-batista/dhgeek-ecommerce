const express = require('express');
const Usuario = require('../controllers/userController');
const { validationToken } = require("../middlewares/userMiddleware");

const router = express.Router();

router.get('/users', validationToken, Usuario.getUsers);
router.get('/cadastrar', Usuario.cadastrar);
router.post('/cadastrar', Usuario.createUser);
router.get('/logar', Usuario.logar);
router.post("/login", Usuario.loginUser);
router.get('/recuperar', Usuario.recuperar);
router.get("/perfilPessoal", validationToken, Usuario.dashboardUser);

module.exports = router;