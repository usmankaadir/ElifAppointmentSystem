//// Get the submit button element
//var submitbutton = document.getElementById('next');

//// Add a click event listener to the submit button
//submitbutton.onclick = function () {

//    // Validate the form elements
//    if (ValidateElememts() == false) {
//        return false;
//    }

//    // Get the selected slot and date
//    var appointment = {};
//    appointment.slot = $(".available-slots.active").find("span").text();
//    appointment.date = new Date();

//    // Make an AJAX POST request to the book appointment endpoint
//    $.ajax({
//        url: "/api/appointment/BookAppointment",
//        type: "POST",
//        contentType: "application/json",
//        data: JSON.stringify(appointment),
//        success: function () {
//            // Display a success message to the user
//        },
//        error: function (error) {
//            // Display an error message to the user
//        }
//    });
//};

//// Add a click event listener to the available slots
//$(".available-slots").click(function () {

//    // Remove the active class from all available slots
//    $(".available-slots").removeClass("active");

//    // Add the active class to the selected available slot
//    $(this).addClass("active");

//    // Get the selected slot text
//    var content = $(this).find("span").text();

//    // Display the selected slot text in the console
//    console.log("Text Content:", content);

//    // Get the current time
//    var currentTime = new Date();

//    // Get the current time in hours, minutes, and seconds
//    var hours = currentTime.getHours();
//    var minutes = currentTime.getMinutes();
//    var seconds = currentTime.getSeconds();

//    // Display the current time in the console
//    console.log("Current Time: " + hours + ":" + minutes + ":" + seconds);

//    // Update the appointment object with the selected slot and date
//    appointment.slot = content;
//    appointment.date = currentTime;
//});
