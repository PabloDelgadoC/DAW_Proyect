const express = require('express');
const HistoricoController = require('../controllers/historico');
const router = express.Router();

router.get('/', HistoricoController.listar);
router.post('/', HistoricoController.crear);
router.get('/:id', HistoricoController.listarById);
router.delete('/', HistoricoController.borrar);
router.delete('/:id', HistoricoController.borrarById);

module.exports = router;
