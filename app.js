let express = require('express');
let bodyParser = require('body-parser');
let states = require('./assets/js/states');

var urlencodedParser = bodyParser.urlencoded({ extended: false })

let app = express();

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));


app.get('/', function(req, res) {
    res.render('index');
});


app.get('/customerReg', function (req, res) {
    res.render('customerReg', {states: states});
});

app.get('/ticketForm', function (req, res) {
    res.render('ticketForm');
});

app.post('/customerReg', urlencodedParser, function(req, res) {
    console.log(req.body);
});

const port = 3000
app.listen(port)
console.log('Now listening on port '+port);

