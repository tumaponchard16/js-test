function onReady(){
	console.log("I'm still working");

	var clock = createClock('clock');
	var clock2 = createClock('clock2');
}

// Create brand new clock
function createClock(id){
	var c = new Object();
	
		c.updateClock = function (){
			// Creating an object "Date"
			var date = new Date();
			
			var clock = document.getElementById(id);
			clock.innerHTML = this.formatDigits(date.getHours()) + ":" + this.formatDigits(date.getMinutes()) + ":" + this.formatDigits(date.getSeconds());
		};

		// Setting up into two digit number or clock
		c.formatDigits = function(val){
			if(val<10){val = "0" + val;}
			return val;
		}

	setInterval(function(){c.updateClock();}, 1000);
	c.updateClock();

	return c;
}

// trigger the onready function after the site completely loads
window.onload = onReady;

/*
When an object has a variable inside of it is called PROPERTY!
When an object has a function inside of it is called METHOD!
*/