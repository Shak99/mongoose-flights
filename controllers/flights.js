//const { create } = require('../models/flight')
const Flight = require('../models/flight')
//const { render } = require('../server')


module.exports = {
    index,
    show,
    new: newFlight,
    create
}



function index(req, res){
    Flight.find({}, function(err, flightDatabase){
        res.render("flights/index", { flightDatabase, title: "All Flights",
        })
    })
}

function show(req, res){
    Flight.findById(req.params.id, function(err, flightDatabase){
        res.render("flights/show", {title: "Flight Detail", flightDatabase});
    })
}


function newFlight(req, res) {
    res.render("flights/new", { title: "Add Flight" });
  }

function create(req, res){
    console.log(req.body)
    Flight.create(req.body, function(err, flightDatabase){ 
            console.log(err)
            if (err) return res.redirect("/flights/new");
            console.log(flightDatabase);
            res.redirect("/flights");
    })
}

