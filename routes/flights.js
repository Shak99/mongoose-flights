var express = require('express');
var router = express.Router();
const flightsController = require('../controllers/flights')

/* GET users listing. 
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
*/

router.get("/", flightsController.index) //show initial flights
router.get("/new", flightsController.new)
router.get("/:id", flightsController.show)
router.post("/", flightsController.create)

module.exports = router;
