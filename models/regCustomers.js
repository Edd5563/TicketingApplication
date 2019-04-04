const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RegCustomerSchema = new Schema({
	fName: {
		type: String,
		required: [true, 'First name is required']
	},
	lName: {
		type: String,
		required: [true, 'Last name is required']
	},
	telephone: {
		type: String,
		required: [true, 'Telephone name is required']
	},
	company: String,
	email: {
		type: String,
		required: [true, 'Email name is required']
	},
});

const CustRegs = mongoose.model('custregs', RegCustomerSchema);
module.exports = CustRegs;
