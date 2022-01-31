$(document).ready(function () {
  //tell browser to load html and css first
  $("#currentDay").text(moment().format("MMM Do YYYY, hh:mm:ss a")); //moment.js

  //assign event listener for save button applied to each time block
  $(".saveBtn").on("click", function () {
    console.log(this);

    //get nearby values in jquery
    var text = $(this).siblings(".description").val(); // taken the change from the sibling html description attribute
    var time = $(this).parent().attr("id"); // taken the change from the parent html id attribute

    //sets items in local storage
    localStorage.setItem(text, time);
  });

  function timeTracker() {
    //current number of hours
    var timeNow = moment().hour();

    //loop over timeblocks
    $(".time-block").each(function () {
      var blockTime = parseInt($(this).attr("id").split("hour")[1]);

      //check time and add classes for timeblock colors
      if (blockTime < timeNow) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      } else if (blockTime === timeNow) {
        $(this).removeClass("future");
        $(this).removeClass("past");
        $(this).addClass("present");
      } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
  }

  //Get items from local storage if any exist
  $("#hour8 .description").val(localStorage.getItem("hour8"));
  $("#hour9 .description").val(localStorage.getItem("hour9"));
  $("#hour10 .description").val(localStorage.getItem("hour10"));
  $("#hour11 .description").val(localStorage.getItem("hour11"));
  $("#hour12 .description").val(localStorage.getItem("hour12"));
  $("#hour13 .description").val(localStorage.getItem("hour13"));
  $("#hour14 .description").val(localStorage.getItem("hour14"));
  $("#hour15 .description").val(localStorage.getItem("hour15"));
  $("#hour16 .description").val(localStorage.getItem("hour16"));
  $("#hour17 .description").val(localStorage.getItem("hour17"));

  //Call the function to repeat
  timeTracker();
});

// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist
