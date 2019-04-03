const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
    ticketNum: String,
    firstName: String,
    lastName: String,
    companyName: String,
    telephone: String,
    email: String,
    ticketNum: String,
    status: String,
    subject: String,
    notes: String
});

const Ticket = mongoose.model('tickets', ticketSchema);
module.exports = Ticket;
