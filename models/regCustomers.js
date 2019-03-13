const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RegCustomerSchema = new Schema({
	firstName: String,
	lastName: String,
	phone: Number,
	address: String,
	city: String,
	state: String,
	zip: Number,
	companyName: String,
	email: String,
});

const CustRegs = mongoose.model('custregs', RegCustomerSchema);
modules.export = CustRegs;
