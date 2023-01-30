// Initiates Jquery
$(document).ready

// Sets a variable for the time using moment() and formats
let currentTime = moment().format("Do MMMM YYYY hh:mm:ss a")
console.log(currentTime)

// Sets a variable to change the attributes of the timeblocks
let currentTimeColor = function() {
    $().attr("backgroundcolor", "red")
}
let pastTimeColor = function() {
    $().attr("backgroundcolor", "grey")
}
let futureTimeColor = function() {
    $().attr("backgroundcolor", "green")
}
// function to check what time what it is and apply the necessary styling
function setTime() {
    for (let i = 0; i < scheduledHours.length; i++) {
        if (currentTime === [i])
        timeBlock === currentTimeColor
    } 
        if (currentTime <= [i]) {
        timeBlock === pastTimeColor
    } else {
        timeBlock === futureTimeColor
    }
}
    