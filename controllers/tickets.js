const Flight = require('../models/flight')
const Ticket = require('../models/ticket')

module.exports = {
    new: newTicket,
    create,
    addToFlight
}

function create(req, res) {
    req.body.flight = req.params.id
    console.log(req.body)
    Ticket.create(req.body, function (err, ticketDatabase) {
        console.log(err)
        res.redirect('/flights');
    });
}

function newTicket(req, res) {
  Ticket.find({}, function (err, tickets) {
    res.render('tickets/new', {
      title: 'Add Ticket', 
      tickets,
      flightId : req.params.id
    });
  })
}


function addToFlight(req, res){
	Ticket.findById(req.params.id, function(err, ticketDatabase){
		// console.log(movieDocument, " <- from the callback Move.findById")
		// add the performer id to the movie cast array
        console.log(ticketDatabase)
		//ticketDatabase.req.params.id.push(req.body.ticketsId);
		// If you mutate a mongo document what do you have to do?
		// does the database know you changed it?
		//ticketDatabase.save(function(err){
		// respond back to the client (res.redirect)
			//res.redirect(`/movies/${ticketDatabase._id}`)

		})
	//})

}