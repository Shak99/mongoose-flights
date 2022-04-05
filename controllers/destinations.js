const Flight = require('../models/flight')

module.exports = {
    setDestination
}


function setDestination(req, res){
    console.log(req.body)
    console.log(`ID: ${req.params.id}`)

    Flight.findById(req.params.id, function(err, flightDatabase){
        flightDatabase.destinations.push(req.body)
        console.log("Should've saved Destinations")
        flightDatabase.save(function(err){
            console.log("not gonna tho :-p")
			res.redirect(`/flights/${flightDatabase._id}`)
        })
    })
}


