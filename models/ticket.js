const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const Ticket = new Schema ({
    seat: {type: String},
    price: {type: Number, min: 0},
    flight: Object
})