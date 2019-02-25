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
 
    $(".regCustomer").click(function () { 
        event.preventDefault(); 
        alert('Register Customer: Error 01Xb1773... This button is not yet connected to be able to register customer information');
        console.log('Register Customer: Error 01Xb1773... This button is not yet connected to be able to register customer information'); 
    });


    
// clear the fields in customer registration
// Server side functionality is not yet Implemented
    $(".clearData").click(function () { 
        event.preventDefault();
        $("#inputName").val('');
        $("#inputCompany").val('');
        $("#inputPhone").val('');
        $("#inputAddress").val('');
        $("#inputAddress2").val('');
        $("#inputCity").val('');
        $(".statesInput").val('');
        $(".defaultCity").val('');
        $("#inputZip").val('');
    });




}); //document.ready close






























// Would like to implement a server side companion app for this to let information be stored in a data server







//for later implementation

//------------------- ^ ||Seperation barrier|| v ---------------------    
// Ajax call to weather api to grab local weather form form adn display.
//May need a node server to make work


   // $(".zipBtn").click(function () {
    //     event.preventDefault();


    //     var apiKey = 'd2b1261b901d14b915dc95d807622fc2'
    //     var zip = $('#zipInput').val();
    //     var url = `https://samples.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${apiKey}`




    //     //Attempt1
    //     $.get(url, function(data) {
    //         console.log(data)
    //     });


    //     //Attempt2
    //     var xhr = new XMLHttpRequest();
    //     xhr.onreadystatechange = function () {
    //         if (xhr.readyState === 4) {
    //             if (xhr.status === 200) {
    //                 console.log(xhr.responseText)
    //             } else {
    //                 alert(xhr.statusText);
    //             }
    //         } 
    //     }
    //     xhr.open('GET', "url");
    //     xhr.send();


    // });
//------------------- ^ ||Seperation barrier|| v ---------------------    

//end of ideas