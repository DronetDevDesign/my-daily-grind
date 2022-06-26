var inputs = {};
var inputElement = document.querySelector("#input-text-area");

// moment.js current date:
var todaysDate = moment().format('dddd, MMMM Do YYYY').toString();
document.getElementById("current-day").innerHTML = todaysDate;
// console.log(todaysDate);

// save calendar input-list-element:
var saveInput = function() {
  localStorage.setItem("inputElement", JSON.stringify(inputElement));
};

// saveBtn targeting textarea:
$("#time-block-groups .saveBtn").click(function() {
  var inputText = $("#time-block-groups .input-list-element").val();

  saveInput();

  console.log(inputText);
});


$(".input-list-element").on( "click", function() {
  console.log($(this).text());

  saveInput();
});



