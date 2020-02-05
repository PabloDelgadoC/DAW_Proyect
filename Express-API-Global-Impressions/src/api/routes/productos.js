const express = require('express');
const router = express.Router();
const ProductoController = require('../controllers/productos');

router.get('/', ProductoController.listar);
router.post('/', ProductoController.crear);
router.get('/:id', ProductoController.listarById);
router.put('/:id', ProductoController.actualizar);
router.delete('/:id', ProductoController.borrarById);

module.exports = router;
