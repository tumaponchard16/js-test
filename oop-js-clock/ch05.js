function onReady(){
	console.log("I'm still working");

	// creating multiple time zone
	var clock = new Clock('clock');
	var clock2 = new Clock('clock2', -300, 'ETC');
	var clock3 = new Clock('clock3', -150, 'ETC');
}

Date.__interval = 0;
Date.__aDates = [];
Date.addToInterval = function(date){
	// console.log(this.__interval);
	this.__aDates.push(date);

	if (!Date.__interval)
		Date.__interval = setInterval(function(){Date.updateDates()}, 1000);
}

Date.updateDates = function(){
	// console.log(this.__aDates.length);
	for (var i = 0; i<this.__aDates.length; i++) {
		this.__aDates[i].updateSeconds();
	}
}

Date.prototype.updateSeconds = function(){
	this.setSeconds(this.getSeconds() + 1);
}

Date.prototype.autoClock = function(isAuto){
	// clearInterval(this.clockInterval);
	if(isAuto){
		/*var that = this;
		this.clockInterval = setInterval(function(){that.updateSeconds()}, 1000);*/

		Date.addToInterval(this);
	}
}

// Create brand new clock
function Clock(id,offset,label){
		offset = offset || 0;
		label = label || "UTC";
		var d = new Date();
		var offset = (offset + d.getTimezoneOffset())*60*1000;
		this.d = new Date(offset+d.getTime());
		this.d.autoClock(true);
		this.id = id;
		this.label = label;

	var that = this;
	setInterval(function(){
		that.updateClock();
		}, 1000);
	this.updateClock();
}

Clock.prototype.updateClock = function (){
			// Creating an object "Date"
			var date = this.d;
				// date.updateSeconds();
			var clock = document.getElementById(this.id);
			clock.innerHTML = this.formatDigits(date.getHours()) + ":" + this.formatDigits(date.getMinutes()) + ":" + this.formatDigits(date.getSeconds()) + " " + this.label;
		};	

// Setting up into two digit number or clock
Clock.prototype.formatDigits = function(val){
	if(val<10){val = "0" + val;}
	return val;
}

// trigger the onready function after the site completely loads
window.onload = onReady;

/*
When an object has a variable inside of it is called PROPERTY!
When an object has a function inside of it is called METHOD!
*/