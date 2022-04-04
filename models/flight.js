const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;


const destinationSchema = new Schema({
    airportDestination: String,
    arrival: {type: Date, min: Date.now() + (365 * 24 * 60 * 60 * 1000)}
})

const flightSchema = new Schema({
    airline: String,
    airport: {type: String, Default: "DEN"},
    flightNo: {type: Number, range: [10, 9999]},
    departs: {type: Date, min: Date.now() + 365 * 24 * 60 * 60 * 1000},
    destinations: [destinationSchema]
})

module.exports = mongoose.model('Flight', flightSchema);
//View: list flights (all info)
//Create: all info
//Links to both of these


//Flight.create({airline:'Delta',airport:'SFO',flightNo:1990, departs:'2022-05-04'}, function(err, doc){console.log(doc);})