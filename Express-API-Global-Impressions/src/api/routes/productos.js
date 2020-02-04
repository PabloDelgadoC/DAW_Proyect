const express = require('express');
const router = express.Router();
const ProductoController = require('../controllers/productos');

router.get('/', ProductoController.listar);

module.exports = router;
