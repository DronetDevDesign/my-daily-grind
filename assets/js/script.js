// moment.js current date displayed inside of header:
var todaysDate = moment().format('dddd, MMMM Do YYYY').toString();
document.getElementById("current-day").innerHTML = todaysDate;


var getInput = function() {
  JSON.parse(localStorage.getItem("inputText"));
};

// save calendar input-text element:
var saveInput = function(input) {
  localStorage.setItem("inputText", JSON.stringify(input));
};

var getTime = function(time) {
  localStorage.setItem("exactHour", JSON.stringify(time));
};

$(".saveBtn").on("click", function() {
  var inputText = $(this)
    .parent(".input-group")
    .children(".input-schedule")
    .val();

      if (inputText) {
      saveInput(inputText);
    }
    // console.log(inputText);

  var exactHour = $(this)
    .parent(".input-group")
    .children("h4")
    .text(".hour");

      if (exactHour) {
      getTime(exactHour);
    }
    // console.log(exactHour);    
});

// get the current time function to run past - present - future:
var getTime = function(currentTime) {
  var time = $(currentTime)
    .find(".hour")
    .text()
    .trim();

    // console.log(time);

// use moment.js to set the time:
var clock = moment(time).set(1, "hours");

// remove pas - future when time is present time:
$(currentTime).removeClass("past future");

// conditional statement to toggle through the states during timesblocks:
  if (moment().isAfter(clock)) {
    $(currenTime).addClass("present");
  } else if (Math.abs(moment().diff(time, "hours")) <= 1) {
    $(currentTime).addClass("future");
  }
};



