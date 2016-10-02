/*Loading the visualization api*/

/*
Original link:
https//docs.google.com/spreadsheets/ccc?key=YOUR_KEY#gid=0

API link
https//spreadsheets.google.com/tq?key=YOUR_KEY
*/

google.load('visualization', '1.0');
google.setOnloadCallback(init);

function init(){
	var sheetLink = 'https//spreadsheets.google.com/tq?key=YOUR_KEY';

	var centerLatLng = new google.maps.LatLng(48.516817734860105,13.005318750000015);
	var map = new MapItinerary(centerLatLng);

	map.setupSheet(sheetLink);
}

Function.prototype.bind = function(scope){
	var fun = this;
	return function(){
		return fun.apply(scope, arguments);
	};
}

function MapItinerary(latlng){
	this.latlng = latlng;

	this.map = new google.maps.Map(document.getElementById("map"), {
		center: latlng,
		zoom: 7,
		mapTypeId: google.maps.MapTypeId.SATELLITE
		});
}

MapItinerary.prototype.setupSheet = function(_link){
	var q = new google.visualization.Query(_link);

	function onSheetCallback(response){
		this.data = response.g.D;
		this.goToRow(this.data[0].c);
		console.log(response.g.D[0]);
	}

	q.send(onSheetCallback.bind(this));
}

MapItinerary.prototype.goToRow = function(row){
	this.map.setCenter( new google.maps.LatLng(row[0].v, row[1].v));
	this.map.setZoom(row[2].v);
}

