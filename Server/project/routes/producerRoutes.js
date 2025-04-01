const express = require('express');
const router = express.Router();
const producerController = require('../controllers/producerController');

router.get('/:email', producerController.getProducer);
router.post('/', producerController.createProducer);
router.put('/:email', producerController.updateProducer);

module.exports = router;
