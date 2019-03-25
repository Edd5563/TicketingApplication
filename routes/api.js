const express = require('express');
const router = express.Router();
let bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false })
const custRegs = require('../models/regCustomers')
const userGroups = require('../models/users')
const saveMessage = require('../models/messages')
let states = require('../assets/js/states');




//------------------------
router.get('/', function (req, res) {
    res.render('login');
});

router.post('/login', urlencodedParser, function (req, res) {
    var users = new userGroups(req.body)
    //console.log(users)
    if (users.userName === '1325' && users.password === "1234") {
        res.render('customerReg', { states: states });

        // console.log(req.url)
    } else {
        res.render('login');
    }
});
//------------------------





router.get('/ticketForm', function (req, res) {
    res.render('ticketForm');
    // console.log(req.url)
});




//------------------------
// passing states array to customerReg to avoind such 
// making such a hude options list.
router.get('/customerReg', function (req, res) {
    res.render('customerReg', { states: states });
    // console.log(req.url)
});

router.post('/customerReg', urlencodedParser, function (req, res) {
    let customer = new custRegs(req.body)
    console.log(customer)
    res.render('customerReg', { states: states });
    // console.log(req.url)
    // customer.save();
});
//------------------------



router.get('/messages', function (req, res) {
    res.render('messages');
    // console.log(req.url)
});


router.post('/messages', urlencodedParser, function (req, res) {
    let custMessage = new saveMessage(req.body)
    console.log(custMessage)
    res.render('messages', {data: custMessage})
    
});








module.exports = router;