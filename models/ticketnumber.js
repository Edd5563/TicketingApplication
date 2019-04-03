const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TicketNumberSchema = new Schema({
    ticketNumber: Number
});

const TicketNumber = mongoose.model('ticketnumbers', TicketNumberSchema);
module.exports = TicketNumber;
