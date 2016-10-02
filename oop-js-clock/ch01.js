/*
When an object has a variable inside of it is called PROPERTY!
When an object has a function inside of it is called METHOD!
*/

function onReady(){
	setInterval(updateClock, 1000);
	updateClock();
}

// fetching the clock id from html file and update the Date
function updateClock(){
	// Creating an object "Date"
	var date = new Date();

	var clock = document.getElementById('clock');
	clock.innerHTML = formatDigits(date.getHours()) + ":" + formatDigits(date.getMinutes()) + ":" + formatDigits(date.getSeconds());
}

// Setting up into two digit number or clock
function formatDigits(val){
	if(val<10){val = "0" + val;}
	return val;
}

// trigger the onready function after the site completely loads
window.onload = onReady;