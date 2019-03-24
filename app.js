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


app.use('/assets', express.static('assets'));

app.set('view engine', 'ejs');


app.get('/index', function(req, res) {
    res.render('index');
});


//------------------------
app.get('/', function (req, res) {
    res.render('login');
});

app.post('/login', urlencodedParser, function (req, res) {
    var users = new userGroups(req.body)
    //console.log(users)
    if (users.userName === "username" && users.password === "passeord") {
        res.render('customerReg', { states: states });
        
        console.log(req.url)
    } else {
        alert('Incorrect username or password')
    }
});
//------------------------



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
    console.log(customer)
    res.render('customerReg', { states: states });
    // customer.save();
});
//------------------------






const port = process.env.port || 3000
app.listen(port, function(){
    console.log('Now listening on port ' + port);
})


