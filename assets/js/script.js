// Getting the current day and date up in the jumbotron
var currentDay = document.getElementById("currentDay")
currentDay.innerHTML = moment().format("dddd, MMMM Do, YYYY")