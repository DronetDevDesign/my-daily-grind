// moment.js current date displayed inside of header:
var todaysDate = moment().format('dddd, MMMM Do YYYY').toString();
document.getElementById("current-day").innerHTML = todaysDate;
// console.log(todaysDate);


// ==========================================================================================
// ===================== THESE BLOCKS WITHIN THESE LINES ====================================

// QUESTION: => How do I get the hour and save it with the text? 
// The ".hour" class isn't pulling the hour or time into local storage or into the console.
// The ".hour" class was place in the .children() with the ".input-schedule" class in BLOCK 2.
// BLOCK 3 - shows the code that works without the ".hour" class. 
// BLOCK 3 - returns the text in console.log and localStorage but without the ".hour". 

// BLOCK 1 -
// save calendar input-text element:
var saveInput = function(input) {
  JSON.parse(localStorage.getItem("inputText"));
  localStorage.setItem("inputText", JSON.stringify(input));
};

BLOCK 2 -
I am trying to save the ".hour" AND ".input-schedule" together in localStorage.
$(".saveBtn").on("click", function() {
  var inputText = $(this).parent(".input-group").children(".hour, .input-schedule").val();
    if (inputText) {
    saveInput(inputText);
    }
    console.log(inputText);
});

// BLOCK 3 - This block returns the text from the textarea only:
// $(".saveBtn").on("click", function() {
//   var inputText = $(this).parent(".input-group").children(".input-schedule").val();
//     if (inputText) {
//     saveInput(inputText);
//     }
//     console.log(inputText);
// });

// =========================================================================================
// =========================================================================================



// get the current time function to run past - present - future:
// var getTime = function(currentTime) {
//   var currentTime = $(this).parent(".input-group").children(".hour").val();
//   var time = $(currentTime)
//     .find(".hour")
//     .text()
//     .trim();

//     console.log(time);

// use moment.js to set the time:
// var clock = moment(time, "L").set("hour", 9);

// remove pas - future when time is present time:
// $(currentTime).removeClass("past future");

// conditional statement to toggle through the states during timesblocks:
//   if (moment().isAfter(clock)) {
//     $(currenTime).addClass("present");
//   } else if (Math.abs(moment().diff(time, "hours")) <= 1) {
//     $(currentTime).addClass("future");
//   }
// };


