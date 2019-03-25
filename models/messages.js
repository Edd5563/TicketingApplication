const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessagesSchema = new Schema({
  messages: String
});

const Messages = mongoose.model('messages', MessagesSchema);
module.exports = Messages;