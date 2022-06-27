// this variable should hold the arrays of the users text inputs once placed in localStorage:
var allInputTextAreas = {};

// moment.js current date:
var todaysDate = moment().format('dddd, MMMM Do YYYY').toString();
document.getElementById("current-day").innerHTML = todaysDate;
// console.log(todaysDate);



// ****************************************************************

// save calendar input-list-element:
var saveInput = function(input) {
  localStorage.setItem("inputText", JSON.stringify(input));
};

// ******************** ORIGINAL OPTION *****************************

// saveBtn targeting textarea:
// $(".saveBtn").click(function() {
//   var inputText = $(this).siblings(".input-schedule").children(".input-list-element").val();
//   if (inputText) {
//     saveInput(inputText); 
//   };

//   console.log(inputText);
// });



// *********************** SECOND OPTION *****************************

$(".saveBtn").click(function() {
  $(".input-list-element").each(function(input) {
    var inputText = $(this).siblings(".input-schedule").children(".input-list-element").val();
    if (inputText) {
     saveInput(inputText.push());
    }
    console.log($(this));
  });
});


//getItem : localStorage.getItem("inputText", JSON.stringify(input));
