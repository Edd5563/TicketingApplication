const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usersGroupsSchema = new Schema({
    userName: String,
    password: String
});

const usersGroups = mongoose.model('usersgroups', usersGroupsSchema);
module.exports = usersGroups;
