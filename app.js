let express = require('express');
let bodyParser = require('body-parser');

let app = express();

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));


app.get('/', function(req, res) {
    app.render('index');
});


const port = 3000
app.listen(port)
console.log('Now listening on port '+port);

