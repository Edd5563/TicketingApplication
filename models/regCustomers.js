const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RegCustomerSchema = new Schema({
	bpid: Number,
	fName: String,
	lName: String,
	telephone: String,
	address: String,
	addressTwo: String,
	city: String,
	state: String,
	zip: String,
	company: String,
	email: String,
});

const CustRegs = mongoose.model('custregs', RegCustomerSchema);
module.exports = CustRegs;
