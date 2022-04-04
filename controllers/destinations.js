const Flight = require('../models/flight')

module.exports = {
    setDestination
}


function setDestination(req, res){
    console.log(req.body)
    console.log(`ID: ${req.params.id}`)

    Flight.findById(req.params.id, function(err, flightDataBase){
        flightDataBase.destinations.push(req.body)
        console.log("Should've saved Destinations")
        flightDataBase.save(function(err){
			res.redirect(`/flights/${flightDataBase._id}`)
        })
    })
}


