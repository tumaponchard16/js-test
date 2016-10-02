/*Creating alarm clock*/
/*Creating a three level of inheritance */

function onReady(){
	console.log("I'm still working");

	// creating multiple time zone
	var clock = new com.cHARDIE.AlarmClock('clock');
	var clock2 = new com.cHARDIE.TextClock('clock2', -300, 'ETC');
	var clock3 = new com.cHARDIE.Clock('clock3', -150, 'ETC');

	// LiveDate.call(clock, 1,2,3);
	// LiveDate.apply(clock, [1,2,3]);
}

// function LiveDate(a,b,c){
// 	console.log(this, a,b,c)
// }

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

var com = com || {};
	com.cHARDIE = com.cHARDIE || {};

// Create brand new clock

com.cHARDIE.Clock = function(id,offset,label){
	offset = offset || 0;
	label = label || "";
	var d = new Date();
	var offset = (offset + d.getTimezoneOffset())*60*1000;
	this.d = new Date(offset+d.getTime());
	this.d.autoClock(true);
	this.id = id;
	this.label = label;

	this.tick(true);
}

com.cHARDIE.Clock.prototype.tick = function(isTick){
	clearInterval(this.myInternalInterval);
	
	if(isTick){
		var that = this;

		this.myInternalInterval = setInterval(function(){
		that.updateClock();}, 1000);
		this.updateClock();
	}
}

// com.cHARDIE.Clock.prototype.version = '1.00';
com.cHARDIE.Clock.prototype.updateClock = function (){
	// Creating an object "Date"
	var date = this.d;
		// date.updateSeconds();
	var clock = document.getElementById(this.id);
	clock.innerHTML = this.formatOuput(date.getHours(), date.getMinutes(), date.getSeconds(), this.label)
};	

com.cHARDIE.Clock.prototype.formatOuput = function(h,m,s,label){
	return this.formatDigits(h) + ":" + this.formatDigits(m) + ":" + this.formatDigits(s) + " " + label;
}

// Setting up into two digit number or clock
com.cHARDIE.Clock.prototype.formatDigits = function(val){
	if(val<10){val = "0" + val;}
	return val;
}

// inheritence //

com.cHARDIE.TextClock = function(id,offset,label){
	com.cHARDIE.Clock.apply(this, arguments);
}

com.cHARDIE.TextClock.prototype = createObject(com.cHARDIE.Clock.prototype, com.cHARDIE.TextClock);

com.cHARDIE.TextClock.prototype.formatOuput = function(h,m,s,label){
	return this.formatDigits(h) + "-" + this.formatDigits(m) + "-" + this.formatDigits(s) + " " + label;
}

// com.cHARDIE.TextClock.prototype.constructor = com.cHARDIE.TextClock;

function createObject(proto, cons){
	function c(){}
	c.prototype = proto;
	c.prototype.constructor = cons;
	return new c();
}

// Alarm clock
com.cHARDIE.AlarmClock = function(id,offset,label){
	com.cHARDIE.Clock.apply(this, arguments);
	this.doUpdate = true;
	this.dom = document.getElementById(id);
	this.dom.contentEditable = true;

	var that = this;
	this.dom.addEventListener('focus', function(e){
		this.innerHTML = this.innerHTML.slice(0,this.innerHTML.lastIndexOf(':'));
		that.tick(false);
	});
	this.dom.addEventListener('blur', function(e){
		var a = this.innerHTML.split(':')
		that.almH = parseInt(a[0]);
		that.almM = parseInt(a[1]);

		if((that.almH>=0 && that.almH<24) && (that.almM>=0 && that.almM<60)){
			var event = new Event('restart_tick');
			this.dispatchEvent(event);
		}

		console.log(that.almM, that.almH);
		that.tick(true);
	});

	this.dom.addEventListener('restart_tick', function(){
		that.tick(true);
	})
}

com.cHARDIE.AlarmClock.prototype = createObject(com.cHARDIE.Clock.prototype, com.cHARDIE.AlarmClock);

com.cHARDIE.AlarmClock.prototype.formatOuput = function(h,m,s,label){	
	if(h==this.almH && m==this.almM){
		return 'ALARM WAKE UP';
		/*var snd = new audio('art/beep.mp3');
			snd.play();*/
	} else {
		return com.cHARDIE.Clock.prototype.formatOuput.apply(this, arguments);
	}
}
// trigger the onready function after the site completely loads
window.onload = onReady;

/*
When an object has a variable inside of it is called PROPERTY!
When an object has a function inside of it is called METHOD!
*/
