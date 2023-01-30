// Initiates Jquery
$(document).ready

// Sets a variable for the time using moment() and formats
let currentDate = moment().format("Do MMMM YYYY")
let currentHour = moment().format("HH")
let currentTime = moment().format("hh:mm:ss a")
let timeBlockStyle = ""

// sets the working hours, enable all hours incase the schedule gets changed in the future
let scheduledHours = [0, 1, 2, 3, 4, 5, 6, 7, 8,9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]

// function to check what time what it is and apply the necessary styling
function setTime() {
    for (let i = 0; i < scheduledHours.length; i++) {
        if (currentHour === [i])
            var currentTimeColor = $().attr("backgroundcolor", "red")
            timeBlockStyle === currentTimeColor
    } 
        if (currentHour <= [i]) {
            var pastTimeColor = $().attr("backgroundcolor", "grey")
            timeBlockStyle === pastTimeColor
    } else {
            var futureTimeColor = $().attr("backgroundcolor", "green")
            timeBlockStyle === futureTimeColor
    }
    console.log(setTime)
}
    
setTime