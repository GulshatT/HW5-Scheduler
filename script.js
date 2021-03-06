 
  
  // WHEN I open the planner
  // THEN the current day and time is displayed at the top of the calendar
  $('#currentDay').text(moment().format('MMMM Do YYYY, h:mm:ss a'));
 
  // WHEN I scroll down
  // THEN I am presented with timeblocks for standard business hours
  // WHEN I view the timeblocks for that day
  // THEN each timeblock is color coded to indicate whether it is in the past (gray), present (red), or future (green)
  window.onload = function() {
    colorCode();
 }
  var now = new Date().getHours();

  function colorCode(){
    console.log('past')
    if (now > 9) {
    $('#9am').addClass('past');
  } else if (now >= 9 && now < 10) {
    $('#9am').addClass('present');
  } else if (now < 9) {
    $('#9am').addClass('future');
  }
  if (now > 10) {
    $('#10am').addClass('past');
  } else if (now >= 10 && now < 11) {
    $('#10am').addClass('present');
  } else if (now < 11) {
    $('#10am').addClass('future');
  }
  if (now > 11) {
    $('#11am').addClass('past');
  } else if (now >= 11 && now < 12) {
    $('#11am').addClass('present');
  } else if (now < 11) {
    $('#11am').addClass('future');
  }
  if (now > 12) {
    $('#12pm').addClass('past');
  } else if (now >= 12 && now < 13) {
    $('#12pm').addClass('present');
  } else if (now < 12) {
    $('#12pm').addClass('future');
  }
  if (now > 13) {
    $('#1pm').addClass('past');
  } else if (now >= 13 && now < 14) {
    $('#1pm').addClass('present');
  } else if (now < 13) {
    $('#1pm').addClass('future');
  }
  if (now > 14) {
    $('#2pm').addClass('past');
  } else if (now >= 14 && now < 15) {
    $('#2pm').addClass('present');
  } else if (now < 14) {
    $('#2pm').addClass('future');
  }
  if (now > 15) {
    $('#3pm').addClass('past');
  } else if (now >= 15 && now < 16) {
    $('#3pm').addClass('present');
  } else if (now < 15) {
    $('#3pm').addClass('future');
  }
  if (now > 16) {
    $('#4pm').addClass('past');
  } else if (now >= 16 && now < 17) {
    $('#4pm').addClass('present');
  } else if (now < 16) {
    $('#4pm').addClass('future');
  }
  if (now > 17) {
    $('#5pm').addClass('past');
  } else if (now >= 17 && now < 19) {
    $('#5pm').addClass('present');
  } else if (now < 17) {
    $('#5pm').addClass('future');
  }
} 

//button 
// get a reference to all of the save buttons $('.saveBtn')
// add a click handler to each save Button using .on() method
$('.saveBtn').on('click', function() {
  console.log('Saved')
  var value = $(this).siblings('.textarea').val(); //.textarea
  console.log(this)
  var key = $(this).siblings('.textarea').attr('id'); //textarea
  localStorage.setItem(key,value);
})



// traverse the DOM to get the values that we need to store to the localStorage
//jquery traversing .parent() .sibling()
//setItems in localStorage  /unit 04

   // add a data - hour attribure to the timeblock


// save to local storage
//handle color coding
// use the moment library to get the current hour - set hour

// get a reference tp all timeblocks 
//loop throught the timeblocks

// call the colorCoding function
// get the data-hour value timeblock [i].data('hour')
//if , else - condition we compare thr currentHOur wuth the timeBLock <, ===,

// handle color coding

// get the data from localstorage and populate the timeblocks
//getItem 
//reference to the textarea id
//.val()
//approach $(textarea;) ->loop (parent)-> val()



// setInterval -> 15000
