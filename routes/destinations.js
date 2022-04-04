var express = require('express');
var router = express.Router();
const destinationsController = require('../controllers/destinations')


router.post("/flights/:id/destinations", destinationsController.setDestination)


module.exports = router;