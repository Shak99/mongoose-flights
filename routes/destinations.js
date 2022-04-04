var express = require('express');
var router = express.Router();
const destinationsController = require('../controllers/destinations')


router.get("/flights/:id/destinations", destinationsController.set)


module.exports = router;