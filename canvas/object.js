function init(){
	var can = document.getElementById("pacman");
	var wid = can.width;
	var hei = can.height;
	var radian = Math.PI/180;

	var context = can.getContext("2d");

	// Fill color
	context.fillStyle = "#000000";

	// Stroke color
	context.StrokeStyle = "#ff0000";
	context.fillRect(0,0,wid,hei);

	context.fillStyle = "#f3f100";
	context.beginPath();

	// start drawing into the canvas
	context.moveTo(wid/2,hei/2);
	context.arc(wid/2,hei/2,50,40*radian,320*radian,false);
	context.lineTo(wid/2,hei/2);

	context.closePath();
	// Fill the object
	context.fill();
	// call the stroke
	context.stroke();
}