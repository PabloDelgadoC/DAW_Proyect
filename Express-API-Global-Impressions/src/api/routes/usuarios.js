const express = require('express');
const router = express.Router();
const UsuarioController = require('../controllers/usuarios');

router.get('/', UsuarioController.listar);
router.post('/', UsuarioController.crear);
router.get('/:id', UsuarioController.listarById);
router.put('/:id', UsuarioController.actualizar);
router.delete('/:id', UsuarioController.borrarById);

module.exports = router;
