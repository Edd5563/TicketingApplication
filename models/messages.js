const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessagesSchema = new Schema({
  toWho: String,
  customerName: String,
  customerCompany: String,
  customerNumber: String,
  customerEmail: String,
  message: String,
  intent: String
});

const Messages = mongoose.model('messages', MessagesSchema);
module.exports = Messages;



/*








*/