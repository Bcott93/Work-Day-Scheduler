// Initiates Jquery
$(document).ready

// Sets a variable for the time using moment() and formats
let currentDate = moment().format("Do MMMM YYYY")
$("#currentDay").append(currentDate)

// let currentHour = moment().format("hA")
let currentTime = moment().format("hh:mm:ss a")

let timeBlockStyle = ""

let scheduledHours = [9, 10, 11, 12, 13, 14, 15, 16, 17]

for (let i = 0; i < scheduledHours.length; i++) {
    let currentHour = moment(scheduledHours[i], "HH").format("h a")
    let hourDiv = $("<div>").addClass("hour").text(currentHour)
    let description = $("<p>").addClass("decription")
    let saveBtn = $("<button>").addClass("saveBtn").text("Save")
    console.log(currentHour)
    $("#container").append(hourDiv, description, saveBtn)
}









// // function to check what time what it is and apply the necessary styling
// function setTime() {
//     for (let i = 0; i < scheduledHours.length; i++) {
//         if (currentHour === [i])
//             var currentTimeColor = $().attr("backgroundcolor", "red")
//             timeBlockStyle === currentTimeColor
//     } 
//         if (currentHour <= [i]) {
//             var pastTimeColor = $().attr("backgroundcolor", "grey")
//             timeBlockStyle === pastTimeColor
//     } else {
//             var futureTimeColor = $().attr("backgroundcolor", "green")
//             timeBlockStyle === futureTimeColor
//     }
//     console.log(setTime)
// }
    
