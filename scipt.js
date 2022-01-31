// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
//Use moment here 
// Display today's day and date
//one big function?
//try implemeneting ready()
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future







//if statement with time based criteria to set the colors
// WHEN I click into a timeblock
//Click event that opens a memo? Or a Card
// THEN I can enter an event
// WHEN I click the save button for that timeblock





// THEN the text for that event is saved in local storage
//Append child and save to local storage 
// WHEN I refresh the page
// THEN the saved events persist



setInterval(displayTime, 1000);