var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//router.get('/', flightController.index)//view initial
//router.get('/:id/show', flightController.show) //show info
//router.posts('/posts', flightController.create) //add new flight

module.exports = router;
