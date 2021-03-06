To create a simple calendar application that allows the user to save events for each hour of the day (with HTML and CSS powered by jQuery) I need the following:

Use the Moment.js library to work with date and time.
the current day is displayed at the top of the calendar
By scrolling down user is presented with timeblocks for standard business hours (I took from 8am to 5pm).
Each timeblock is color coded to indicate whether it is in the past, present, or future
With ClickEvent user is able to enter an event into the timeblock
WHEN user clicks the save button for that timeblock THEN the text for that event is saved in local storage
WHEN user refreshes the page, all saved events persist.
WHEN user clicks trash button, timeblock is empty with deleted event.