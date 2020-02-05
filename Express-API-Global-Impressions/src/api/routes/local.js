const express = require('express');
const router = express.Router();
const LocalController = require('../controllers/local');

router.get('/', LocalController.listar);
router.post('/', LocalController.crear);
router.put('/:id', LocalController.actualizar);
router.delete('/:id', LocalController.borrar);

module.exports = router;