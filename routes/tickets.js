const express = require('express');
const router = express.Router();
const ticketsController = require('../controllers/tickets');

router.get('/flights/:id/tickets/new', ticketsController.new);
router.post('/flights/:id/tickets', ticketsController.create);
router.post('/tickets/:id/flights', ticketsController.addToFlight);



module.exports = router;