// this variable should hold the arrays of the users text inputs once placed in localStorage:
var allInputTextAreas = {};

// moment.js current date:
var todaysDate = moment().format('dddd, MMMM Do YYYY').toString();
document.getElementById("current-day").innerHTML = todaysDate;
// console.log(todaysDate);



// ****************************************************************

// save calendar input-list-element:
var saveInput = function(input) {
  JSON.parse(localStorage.getItem("inputText"));
  localStorage.setItem("inputText", JSON.stringify(input));
};

// console.log((localStorage.getItem("inputText")));

// var getInput = function() {
//   localStorage.getItem(inputText);
// }


  $(".saveBtn").on("click", function() {
    var inputText = $(this).parent(".input-group").children(".input-schedule").val();
      if (inputText) {
      saveInput(inputText);
      }
      
      console.log(inputText);
      // console.log((localStorage.getItem("inputText")));
  });


