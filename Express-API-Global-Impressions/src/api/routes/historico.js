const express = require('express');
const HistoricoController = require('../controllers/historico');
const router = express.Router();

router.get('/historico', HistoricoController.listar);
router.post('/historico', HistoricoController.crear);
router.get('/historico/:id', HistoricoController.listarById);
router.delete('/historico', HistoricoController.borrar);
router.delete('/historico/:id', HistoricoController.borrarById);

module.exports = router;
