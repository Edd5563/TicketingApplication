const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SearchSchema = new Schema({
    search: String
});

const Search = mongoose.model('searchs', SearchSchema);
module.exports = Search;
