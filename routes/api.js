const express = require('express');
const router = express.Router();
let bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false })
const custRegs = require('../models/regCustomers')
const userGroups = require('../models/users')
const messages = require('../models/messages')
const tickets = require('../models/ticketing')
const searchs = require('../models/search')

let states = require('../assets/js/states');


//------------------------
router.get('/', function (req, res, next) {
    res.render('login');
});

router.post('/login', urlencodedParser, function (req, res, next) {
    var users = new userGroups(req.body)
    //console.log(users)
    if (users.userName === 'username' && users.password === "passeord") {
        res.render('search');

        // console.log(req.url)
    } else {
        res.render('login');
    }
});
//------------------------






//------------------------
// passing states array to customerReg to avoind such 
// making such a hude options list.
router.get('/customerReg', function (req, res) {
    res.render('customerReg', { states: states });
    // console.log(req.url)
});

router.post('/customerReg', urlencodedParser, function (req, res, next) {
    let customer = new custRegs(req.body)
    console.log(customer)
    res.render('customerReg', { states: states });
    custRegs.create(req.body).then(function(customer){
        res.send(customer)
    }).catch(next);
});

//------------------------


router.get('/messages', function (req, res, next) {
    res.render('messages');
    // console.log(req.url)
});

//needs a catch next
router.post('/messages', urlencodedParser, function (req, res, next) {
    let custMessage = new messages(req.body)
    console.log(custMessage)
    res.render('messages');
});




//------------------------ticketForm





router.get('/ticketForm', function (req, res) {
    res.render('ticketForm');
    // console.log(req.url)
});




router.post('/ticketForm', urlencodedParser, function (req, res, next) {
    let ticketSave = new tickets(req.body);
    console.log(ticketSave);
    res.render('ticketForm');
});






//------------------------Search feature is not set to find. Please rewrite

router.get('/search', function (req, res, next) {
    res.render('search')
});

router.post('/search', urlencodedParser, function (req, res, next) {
    let searchResults = new searchs(req.body);
    console.log(searchResults.search);
    
    if (searchResults.search == null || searchResults.search == "") {
        res.render('search');
    } else {
        custRegs.findOne({ fName: searchResults.search }).then(function (results) {
            res.render('results', { data: results })
        }).catch(next);
    }

    

  
   

});


//------------------------


router.get('/results', function (req, res, next) {
    res.render('results')
});

router.post('/results', urlencodedParser, function (req, res, next) {
    let searchResults = new searchs(req.body);
        custRegs.findOne({ fName: searchResults.search }).then(function (results) {
        res.render('results', { data: results })
    });
});



module.exports = router;