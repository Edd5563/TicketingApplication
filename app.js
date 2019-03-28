let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose')





let app = express();

app.use('/api', require('./routes/api'));
app.set('view engine', 'ejs');


mongoose.Promise = global.Promise;


mongoose.connect('mongodb://localhost/customerDB', { useNewUrlParser: true })
mongoose.connection.once('once', function () {
    console.log('Connection has been Established')

}).on('error', function (error) {
    console.log('Connection error: ' + error)
});


mongoose.connect('mongodb://localhost/usersDB', { useNewUrlParser: true })
mongoose.connection.once('once', function () {
    console.log('Connection has been Established')

}).on('error', function (error) {
    console.log('Connection error: ' + error)
});


mongoose.connect('mongodb://localhost/messagesDB', { useNewUrlParser: true })
mongoose.connection.once('once', function () {
    console.log('Connection has been Established')

}).on('error', function (error) {
    console.log('Connection error: ' + error)
});



const port = process.env.port || 3000
app.listen(port, function(){
    console.log('Now listening on port ' + port);
});