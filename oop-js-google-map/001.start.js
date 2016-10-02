function init() {	
	var center = new google.maps.LatLng(48.516817734860105,13.005318750000015);

	var aGray = [{
		stylers: [{saturation: -100}]
	}];

	var grayStyle = new google.maps.StyledMapType(aGray, {name:"Gray"});

	var map = new google.maps.Map(document.getElementById("map"), {
		center: center,
		zoom: 6,
		mapTypeId: google.maps.mapTypeId.ROADMAP,
		disableDefaultUI: true
	});
	map.mapTypes.set('gray', grayStyle);
	map.setMapTypeId('gray');	

	var sm = new StudentMap();
	console.log(sm.mapType);/*The output would be Google Map*/
}

function StudentMap(){
	// console.log("a new object has been created");
	this.mapType = "Google Map";
	this.ver = 1.001;
	var StudetName = "Richard Tumapon"; /*Local variable that belongs only to this function*/
}