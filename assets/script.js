// Initiates Jquery
$(document).ready

// Sets a variable for the time using moment() and formats
let currentDate = moment().format("Do MMMM YYYY")
$("#currentDay").append(currentDate)

// let currentHour = moment().format("hA")
let currentTime = parseInt(moment().format("h a"))

// An array of the working hours
let scheduledHours = [9, 10, 11, 12, 13, 14, 15, 16, 17]

// Loop through the scheduled hours to create the timeBlocks
for (let i = 0; i < scheduledHours.length; i++) {
    //Current hour is the parameter which creates the timeblocks and sets the format to (example: 5pm instead of 17)
    let currentHour = moment(scheduledHours[i], "HH").format("h a")
    // Creates a div, with a column width of 1/12th and addes the currentHour value as the text. 
    let hourDiv = $("<div>").addClass("col-1 hour").text(currentHour)
    // Creates a textarea with the column width of 5/6ths and allows the user to input data.
    let description = $("<textarea>").addClass("col-10 description").attr("contentEditable", "true")
    // Creates a button, with the column width of 1/12th, and adds the text "Save"
    let saveBtn = $("<button>").addClass("col-1 saveBtn").text("Save")
    // Creates a div with the 3 elements above, and puts them into a row.
    let timeBlock = $("<div>").addClass("row").append(hourDiv, description, saveBtn)  
    // Checks each looped value against the current time, and then styles the row
    if(scheduledHours[i] < currentTime) {
        description.addClass("future")
    }
    if(scheduledHours[i] > currentTime) {
        description.addClass("past")
    }
    if(scheduledHours[i] === currentTime) {
        description.addClass("present")
    }
     // Adds the timeBlock to the HTML.
    $(".container").append(timeBlock)
    
    // Creates a variable to check if there is a userInput in localStorage
    let userInput = window.localStorage.getItem(currentHour)
    // If there is a userinput, it sets the description value to 
    if (userInput) {
      description.val(userInput);
    }

}

// Adds a click function to all buttons within the relevant class
$(".saveBtn").on("click", function (event) {
    // stops the page refreshing once an event is triggered
event.preventDefault()
    // Accesses the sibling of .savebtn, and finds the description value, adds it to userInput
    let userInput = $(this).siblings(".description").val()
    // Accesses the sibling of .savebtn, and finds the relevant hour value, adds it to hour
    let hour = $(this).siblings(".hour").text()
    // Saves the two variables to Local Storage
    window.localStorage.setItem(hour, userInput)
})


 





