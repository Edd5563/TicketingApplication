const express = require('express');
const router = express.Router();
let bodyParser = require('body-parser');
const url = require('url');

var urlencodedParser = bodyParser.urlencoded({ extended: false })
const custRegs = require('../models/regCustomers')
const userGroups = require('../models/users')
const tickets = require('../models/ticketing')
const searchs = require('../models/search')
const TicketNumber = require('../models/ticketnumber')





//------------------------login
router.get('/', function (req, res, next) {
    res.render('login');
});

router.post('/login', urlencodedParser, function (req, res, next) {
    var users = new userGroups(req.body)
    //console.log(users)
    if (users.userName === 'Erivera' && users.password === "Welcome2012") {
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
    res.render('customerReg');
});

router.post('/customerReg', urlencodedParser, function (req, res, next) {
    let customer = new custRegs(req.body)
    //console.log(customer)
    // res.render('customerReg', { states: states });Marked for deletion
    custRegs.create(req.body).then(function(customer){
        res.render('customerReg')
    }).catch(next);
});


//-----------ticketForm
router.get('/ticketForm', function (req, res) {
    res.render('ticketForm');
    // Marked for Deletion
});


router.post('/ticketForm', urlencodedParser, function (req, res, next) {
    tickets.create(req.body).then(function (ticketData) {
        res.render('search');// Future this will lead to Open ticket where this ticket will be displayed
    });
});


//Search feature... i had a bit of trouble with this one.
//Its very bulky, but this fix is needed asap so i will work on a 
//cleaner coode another time.

router.get('/search', function (req, res, next) {
    res.render('search')
});

router.post('/search', urlencodedParser, function (req, res, next) {
    let searchResults = new searchs(req.body);
    let searchType = req.body.searchBy
    

    if (searchType === "all") {
        custRegs.find({}).then(function (searchAll) {
            if (searchAll) {
                // console.log(searchAll)
                custRegs.find({}).then(function(findAll_customers) {
                    TicketNumber.findOne({}).then(function (ticket_number) {
                        TicketNumber.updateOne({}, { $inc: { ticket_number: +1 } }).then(function () {
                            res.render('results', { data: findAll_customers, tickNum: ticket_number})  
                        }).catch(next);
                    }).catch(next);
                }).catch(next);
            } else {
                console.log("Nothing Found")
                res.redirect('back');
            }
        }).catch(next);



// Note for myself: This is where i am trying to make a single way to search via
// first, last, telephone, or all
// It looks like i may need to make a new view for the ALL search only because 
// of the Limitations on EJS / Templates in general :(




    }  else if (searchType === "fName") {
        custRegs.findOne({ fName: searchResults.search }).then(function (f_name_search) {
            if (f_name_search) {
                console.log(f_name_search)
                res.redirect('back');
            } else {
                console.log("Not Found")
                res.redirect('back');
            }

         }).catch(next);
    } else if (searchType === "lName"){
        custRegs.findOne({ lName: searchResults.search }).then(function (l_name_search) {
            if (l_name_search) {
                console.log(l_name_search)
                res.redirect('back');
            } else {
                console.log("Not Found")
                res.redirect('back');
            }

        }).catch(next);
    } else {
        custRegs.findOne({ telephone: searchResults.search }).then(function (l_name_search) {
            if (l_name_search) {
                console.log(l_name_search)
                res.redirect('back');
            } else {
                console.log("Not Found")
                res.redirect('back');
            }

        }).catch(next);
    }


});

//Updating customers at custregs
router.post('/results/:id/edit', urlencodedParser, function (req, res, next) {
    // console.log(req.params.id)
    // console.log(req.body)
    custRegs.findOneAndUpdate({ _id: req.params.id},
        {
            "fName": req.body.fName,
            "lName": req.body.lName,
            "company": req.body.company,
            "telephone": req.body.telephone,
            "email": req.body.email
        }).then(function(){
            res.render('customerReg');
        }).catch(next);
});


//Deleting Customers from the custregs
router.post('/results/:id/delete', function (req, res, next) {
    custRegs.deleteOne({ "_id": req.params.id}).then(function() {
        res.render('customerReg')
    });
});



//---------Search Tickets page

router.get('/searchTickets', function (req, res, next) {
    res.render('search-tickets')
});

router.post('/searchTickets', urlencodedParser, function (req, res, next) {
    let search_ticket_results = new tickets(req.body);
    tickets.findOne({ ticketNum: search_ticket_results.ticketNum}).then(function(results) {
        if (results === null) {
            res.render('search-tickets')
        } else {
            res.render('search-tickets-results', { ticketData: results })
        }
        
    }).catch(next);
    
});

//Deleting tickets from the search tickets
router.post('/searchTickets/:id/delete', function (req, res, next) {
    tickets.deleteOne({ "ticketNum": req.params.id}).then(function() {
        res.render('search-tickets')
    });
});


//Updating tickets
router.post('/searchTickets/:id/edit', urlencodedParser, function (req, res, next) {
    // console.log(req.params.id)
    // console.log(req.body)
    tickets.findOneAndUpdate({ ticketNum: req.params.id},
        {
            "firstName": req.body.firstName,
            "lastName": req.body.lastName,
            "companyName": req.body.companyName,
            "telephone": req.body.telephone,
            "email": req.body.email,
            "status": req.body.status,
            "subject": req.body.subject,
            "notes": req.body.notes
        }).then(function(){
            res.render('search');
        });
});


//---------View all open tickets

router.get('/open-tickets', function(req, res,next) {
    tickets.find({status:"Open"}).then(function(result) {
        res.render('open-tickets', {openData: result});
    });
});

//In open-tickets the ability to edit and delete
router.post('/open-tickets/:id/edit', function(req, res, next) {
 //issues with url routing
});


//Delete the ticket of the open tiocket list
router.post('/open-tickets/:id/delete', function (req, res, next) {
    tickets.deleteOne({ "_id": req.params.id }).then(function () {
        tickets.find({ status: "Open" }).then(function (result) {
            res.redirect('back');
        });
    });
});












// Customer Master List
router.get('/customer-master-list', function(req, res, next) {
    custRegs.find().then(function(results) {
        res.render('customer-master-list', {custData: results});    
    }).catch(next);
    
});






module.exports = router;