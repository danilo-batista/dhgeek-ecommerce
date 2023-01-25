const express = require('express');
const Usuario = require('../controllers/userController');

const router = express.Router();

router.get('/cadastrar', Usuario.cadastrar);
router.get('/logar', Usuario.logar);
router.get('/recuperar', Usuario.recuperar);

module.exports = router;