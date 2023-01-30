// Initiates Jquery
$(document).ready

// Sets a variable for the time using moment() and formats
let currentDate = moment().format("Do MMMM YYYY")
$("#currentDay").append(currentDate)

// let currentHour = moment().format("hA")
let currentTime = parseInt(moment().format("h a"))

// An array of the working hours
let scheduledHours = [9, 10, 11, 12, 13, 14, 15, 16, 17]

let testTime = parseInt(moment("2023-01-30 08:01:00").format("h a"))

for (let i = 0; i < scheduledHours.length; i++) {
    let currentHour = moment(scheduledHours[i], "HH").format("h a")
    let hourDiv = $("<div>").addClass("col-1 hour").text(currentHour)
    let description = $("<textarea>").addClass("col-10 description").attr("contentEditable", "true")
    let saveBtn = $("<button>").addClass("col-1 saveBtn").text("Save")
    let timeBlock = $("<div>").addClass("row").append(hourDiv, description, saveBtn)  
    
    if(scheduledHours[i] < currentTime) {
        description.addClass("future")
    }
    if(scheduledHours[i] > currentTime) {
        description.addClass("past")
    }
    if(scheduledHours[i] === currentTime) 
        description.addClass("present")
    }

     
    $(".container").append(timeBlock)
   
}




