// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar



// if (past) { block < current hour } remove future and present class, add past class
//else if (block hour === current hour){ remove future and past class, add present class} use $(this)
//else  { remove past and present class and add future class colors are predetermined}

$(document).ready(function(){//tell browser to load html and css first 
    $("#currentDay").text(moment().format("MMM Do YYYY, hh:mm:ss a"));//moment.js
    //assign event listener for save button applied to each time block
    $(".saveBtn").on("click", function( ){
        console.log(this);
        //get nearby values in jquery
        var text = $(this).siblings(".description").val(); // taken the change from the sibling html description attribute
        var time = $(this).parent().attr("id"); // taken the change from the parent html id attribute
   
        //sets items in local storage
        localStorage.setItem(text, time);
    })
    function timeTracker(){
        //current number of hours
        var timeNow = moment().hour();

        //loop over timeblocks 
        $(".time-block").each(function(){
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);

            //check time and add classes for timeblock colors
            if (blockTime < timeNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (blockTime === timeNow){
                $(this).removeClass("future");
                $(this).removeClass("past");
                $(this).addClass("present");
            } 
            else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }



        })
    }



})

//if statement with time based criteria to set the colors
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock





// THEN the text for that event is saved in local storage
//Append child and save to local storage 
// WHEN I refresh the page
// THEN the saved events persist



setInterval(displayTime, 1000);