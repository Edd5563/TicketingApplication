const express = require('express');
const router = express.Router();
let bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false })
const custRegs = require('../models/regCustomers')
const userGroups = require('../models/users')
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
// passing states array to customerReg to avoid
// making such a hude options list.
router.get('/customerReg', function (req, res) {
    res.render('customerReg', { states: states });
});

router.post('/customerReg', urlencodedParser, function (req, res, next) {
    let customer = new custRegs(req.body)
    console.log(customer)
    res.render('customerReg', { states: states });
    custRegs.create(req.body).then(function(customer){
        res.send(customer)
    }).catch(next);
});


//-----------ticketForm
router.get('/ticketForm', function (req, res) {
    res.render('ticketForm');
    // Marked for Deletion
});


router.post('/ticketForm', urlencodedParser, function (req, res, next) {
    tickets.create(req.body).then(function(ticketData){
        res.render('search');// Future this will lead to Open ticket where this ticket will be displayed
    });

   
});

//------------------------Search feature is not set to find. Please rewrite

router.get('/search', function (req, res, next) {
    res.render('search')
});

router.post('/search', urlencodedParser, function (req, res, next) {
    let searchResults = new searchs(req.body);
    // console.log(searchResults.search);
    custRegs.findOne({ fName: searchResults.search }).then(function (results) {
        if (results === null ){
            res.render('search')
        } else {
            res.render('results', { data: results })
        }
    }).catch(next);
});


//---------Results page

router.get('/results', function (req, res, next) {
    res.render('results')
});


module.exports = router;