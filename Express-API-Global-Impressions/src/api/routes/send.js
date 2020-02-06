const express = require('express');
const router = express.Router();
const SendController = require('../controllers/send');


router.post('/', SendController.enviar);


module.exports = router;