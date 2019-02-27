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
        alert("Hello World!");
        //this section is for customer registration
    });

    //function that deleted dynamically created customerData from json to html
    function deleteData() {
        $(this).closest(".customerData").remove();
    }



    $("#editBtn").click(function () {
        
        
        $("#inputName").remove();
        $("#inputCompany").remove();
        $("#inputPhone").remove();
        $("#inputAddress").remove();
        $("#inputAddress2").remove();
        $("#inputCity").remove();
        $(".statesInput").remove();
        $(".defaultCity").remove();
        $("#inputZip").remove();
        
        
        
        
        
        
        
        
        
        // $("#inputName").val('');
        // $("#inputCompany").val('');
        // $("#inputPhone").val('');
        // $("#inputAddress").val('');
        // $("#inputAddress2").val('');
        // $("#inputCity").val('');
        // $(".statesInput").val('');
        // $(".defaultCity").val('');
        // $("#inputZip").val('');
    });










//--------------------------------clear the fields in customer registration
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










//------------------------------------------------------ weatherAPI
    function getWeather() {
        var apiKey = 'd2b1261b901d14b915dc95d807622fc2'
        var zip = $('#zipInput').val();
        var url = `https://samples.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${apiKey}`

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    var weather = JSON.parse(xhr.responseText)
                    console.log(weather);
                } else {
                    alert('Error:'+xhr.statusText);
                }
            }
        }
        xhr.open('GET', "url");
        xhr.send();
    }

    $(".zipBtn").click(function () {
        event.preventDefault();
        //getWeather();
        alert('At this moment, This buttomn is not progreammed to search for your weather. Sorry');
    });







//------------------------------------------------------ API call to my json file with customer info
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    var customers = JSON.parse(xhr.responseText);
                    for (let i = 0; i < customers.length; i++) {
                        var customerHTML = `
                        <div class="card item${i}" id="customerData" style="width: 15rem;">
                            <div class="card-body">
                                <input type="button" onclick="$(this).closest('#customerData').remove()" class="btn btn-danger" value="Delete">
                                <input type="button" id="editBtn" class="btn btn-info" value="Edit">
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">${customers[i].fullName}</h5>
                                <p class="card-text">${customers[i].address}</p>
                                <p class="card-text">${customers[i].secondAddress}</p>
                                <p class="card-text">${customers[i].companyName}</p>
                                <p class="card-text">${customers[i].phoneNumber}</p>
                                <p class="card-text">${customers[i].city}, ${customers[i].state}</p>
                                <p class="card-text">${customers[i].zip}</p>
                            </div>
                        </div>
                        <br>`;
                        $(".customerInfo").append(customerHTML);
                    }
                } else {
                    alert(xhr.statusText);
                }
            } 
        }
        xhr.open('GET', "../data/customerData.json");
        xhr.send();


 

    

}); //document.ready close












//Future ideas for later implementation

// Would like to implement a server side companion app for this to let information be stored in a data server

//------------------- ^ ||Seperation barrier|| v ---------------------    



//end of ideas