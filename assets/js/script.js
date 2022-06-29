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








// ******************** ORIGINAL OPTION *****************************

// saveBtn targeting textarea:
// $(".saveBtn").on("click", function(e) {
//   var inputText = $(e.target).prev().children().val();

//   if (inputText) {
//     saveInput(inputText); 
//   };

//   console.log(e.target.prev);
// });


// $(".saveBtn").on("click", function() {
//     // var inputText = $(this).siblings(".input-schedule").children(".input-list-element").val();
//     var inputText = $(this).siblings(".input-schedule");
//     for (var i = 0; i < inputText.length; i++) {
//       console.log(inputText[i].id);
//       console.log(this.id);
//       if (this.id === inputText[i].id) {
//         console.log("hello");
//         var currentElement = $(this).siblings(".input-schedule")[i];
//         console.log(currentElement.children(".input-list-element").val());
//       }
//     }
//     if (inputText) {
//      saveInput(inputText);
//     }
//     console.log(inputText);
//   });

// var inputText = $(e.target).prev().children().val();


// *********************** SECOND OPTION *****************************

// $(".saveBtn").click(function() {
//   $(".input-list-element").each(function(input) {
//     var inputText = $(this).siblings(".input-schedule").children(".input-list-element").val();
//     if (inputText) {
//      saveInput(inputText.push());
//     }
//     console.log($(this));
//   });
// });


//getItem : localStorage.getItem("inputText", JSON.stringify(input));
