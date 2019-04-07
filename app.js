let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose')





let app = express();

app.use('/', require('./routes/api'));
app.set('view engine', 'ejs');

//Error handler
app.use(function (err, req, res, next) {
    console.log(err.message);
    res.send({ error: err.message });
});

mongoose.Promise = global.Promise;


//mongoose.connect('mongodb://localhost/usersDB', { useNewUrlParser: true })
mongoose.connect('mongodb://devtester:4devuse@ds229552.mlab.com:29552/heroku_zbxxvn5c', { useNewUrlParser: true })
mongoose.connection.once('once', function () {
    console.log('Connection has been Established')

}).on('error', function (error) {
    console.log('Connection error: ' + error)
});





const port = process.env.PORT || 5000
app.listen(port, function () {
    console.log('Now listening on port ' + port);
});