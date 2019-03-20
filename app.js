let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose')

let states = require('./assets/js/states');

const custRegs = require('./models/regCustomers')
const userGroups = require('./models/users')

var urlencodedParser = bodyParser.urlencoded({ extended: false })
mongoose.Promise = global.Promise;

let app = express();





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







app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));








app.get('/', function(req, res) {
    res.render('index');
});

app.get('/ticketForm', function (req, res) {
    res.render('ticketForm');
});



//------------------------
// passing states array to customerReg to avoind such 
// making such a hude options list.
app.get('/customerReg', function (req, res) {
    res.render('customerReg', {states: states});
});

app.post('/customerReg', urlencodedParser, function(req, res) {
    var customer = new custRegs(req.body)
    customer.save();
});
//------------------------




//------------------------
app.get('/login', function (req, res) {
    res.render('login');
});

app.post('/login', urlencodedParser, function (req, res) {
    var users = new userGroups(req.body)
    console.log(users)
    // this area will compare username password to db info and if 
    //success take you to the next page.
});
//------------------------



const port = 3000
app.listen(port)
console.log('Now listening on port '+port);

