function onReady(){
	console.log("I'm still working");

	// creating multiple time zone
	var clock = new Clock('clock');
	var clock2 = new Clock('clock2', -300, 'ETC');
	var clock3 = new Clock('clock3', -150, 'ETC');
}

// Create brand new clock
function Clock(id,offset,label){
		offset = offset || 0;
		label = label || "UTC";
		var d = new Date();
		this.offset = (offset + d.getTimezoneOffset())*60*1000;

		this.updateClock = function (){
			// Creating an object "Date"
			var date = new Date();
				date = new Date(this.offset + date.getTime());

			var clock = document.getElementById(id);
			clock.innerHTML = this.formatDigits(date.getHours()) + ":" + this.formatDigits(date.getMinutes()) + ":" + this.formatDigits(date.getSeconds()) + " " + label;
		};	

		// Setting up into two digit number or clock
		this.formatDigits = function(val){
			if(val<10){val = "0" + val;}
			return val;
		}

	var that = this;
	setInterval(function(){
		that.updateClock();
		}, 1000);
	this.updateClock();
}

// trigger the onready function after the site completely loads
window.onload = onReady;

/*
When an object has a variable inside of it is called PROPERTY!
When an object has a function inside of it is called METHOD!
*/