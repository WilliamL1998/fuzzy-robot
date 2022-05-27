// Makes sure the document loads first before executing code
$(document).ready(function(){
    // Getting the current day of the week and date up in the jumbotron
    var currentDay = document.getElementById("currentDay")
    currentDay.innerHTML = moment().format("dddd, MMMM Do, YYYY")

    // Initializing function that counts the hours and updates timeblock colours
    function hourCounter() {
        // Initializing variable that counts the current hour
        var currentHour = moment().hours()

        // Initializing a loop that checks the current hour and correspondingly update the colours of timeblocks
        $(".time-block").each(function() {
            // Grabs the id of each timeblock which would correspond to the hour it contains
            var blockHour = $(this).attr("id")
            // If loop that checks the block hour against the current hour and applies the corresponding colours
            if (blockHour == currentHour) {
                $(this).addClass("present")
                $(this).removeClass("future")
                $(this).removeClass("past")
            } else if (blockHour > currentHour) {
                $(this).addClass("future")
                $(this).removeClass("present")
                $(this).removeClass("past")
            } else {
                $(this).addClass("past")
                $(this).removeClass("future")
                $(this).removeClass("present")
            }
        })
    }

    // Runs hourCounter immediately on page load, then checks it every 60 seconds
    hourCounter()
    var timeBlockInterval = setInterval(hourCounter, 60000)

    // Initializing save button
    $(".saveBtn").on("click", function() {
        // Check the button's siblings for the text area with the class description
        var task = $(this).siblings(".description").val()
        // Check the button's parrent for the block hour which I stored in the id
        var hour = $(this).parent().attr("id")

        // Store hour and task in local storage to be retrieved later
        localStorage.setItem(hour, task)
    })

    // Retrieve preexisting task information from local storage if it exists
    $("#9 .description").val(localStorage.getItem("9"))
    $("#10 .description").val(localStorage.getItem("10"))
    $("#11 .description").val(localStorage.getItem("11"))
    $("#12 .description").val(localStorage.getItem("12"))
    $("#13 .description").val(localStorage.getItem("13"))
    $("#14 .description").val(localStorage.getItem("14"))
    $("#15 .description").val(localStorage.getItem("15"))
    $("#16 .description").val(localStorage.getItem("16"))
    $("#17 .description").val(localStorage.getItem("17"))
})