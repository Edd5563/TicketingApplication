let express = require('express');
let bodyParser = require('body-parser');

let app = express();

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));


app.get('/', function(req, res) {
    res.render('index');
});


app.get('/customerReg', function (req, res) {
    res.render('customerReg');
});

app.get('/ticketForm', function (req, res) {
    res.render('ticketForm');
});


const port = 3000
app.listen(port)
console.log('Now listening on port '+port);

