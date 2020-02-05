const express = require('express');
const router = express.Router();
const EmpleadoController = require('../controllers/empleado');

router.get('/', EmpleadoController.listar);
router.post('/', EmpleadoController.crear);
router.get('/:id', EmpleadoController.listarById);
router.put('/:id', EmpleadoController.actualizar);
router.delete('/:id', EmpleadoController.borrar);

module.exports = router;
