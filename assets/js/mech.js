$(document).ready(function () {

    $('.incomingCall').hide();// hiding content for now
    $('.customerForm').hide();// hiding content for now

    $(".clientBtn").click(function () {
        
        $('.incomingCall').hide();
        $('.customerForm').show();
    });
    
    $(".messageBtn").click(function () { 
        $('.customerForm').hide();
        $('.incomingCall').show();
    });
 
    $(".submitBtn").click(function () { 
        event.preventDefault(); 
        window.location.replace("customerReg");
        //this section is for customer registration
    });

    $('input#input_text, textarea#textarea2').characterCounter();

    //$("#editBtn").click(function () {  });










//--------------------------------clear the fields in customer registration
  





    

}); //document.ready close












//Future ideas for later implementation

// Would like to implement a server side companion app for this to let information be stored in a data server

//------------------- ^ ||Seperation barrier|| v ---------------------    



//end of ideas