let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose')





let app = express();

app.use('/api', require('./routes/api'));
app.set('view engine', 'ejs');

//Error handler
app.use(function(err, req, res, next){
    console.log(err.message);
    res.send({error:err.message});
});

mongoose.Promise = global.Promise;


mongoose.connect('mongodb://devtester:4devuse@ds061365.mlab.com:61365/heroku_sfr6qnmd', { useNewUrlParser: true })
mongoose.connection.once('once', function () {
    console.log('Connection has been Established')

}).on('error', function (error) {
    console.log('Connection error: ' + error)
});





const port = process.env.port || 3000
app.listen(port, function(){
    console.log('Now listening on port ' + port);
});