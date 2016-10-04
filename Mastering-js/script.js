// Modernizr Code for audio
console.log(gQ.version() + '----- -----');

gQ.start = function(){
	// console.log(gQ('.article'));
	gQ('msg').text('change my copy');

	console.log(gQ('#msg').adapter);
};

/*window.onload = function(){
	console.log("window is loaded");
}

addOnReady(function(){
	console.log("2 window is loaded");
});

addOnReady(function(){
	console.log("3 window is loaded.");*/

	// if(document.querySelectorAll && document.querySelectorAll('body:first-of-type')){
	// 	console.log("yes we have it");

	// 	q = function(parm){
	// 		return document.querySelectorAll(parm);
	// 	};

	// 	onReadySelect();

	// } else{
	// 	loadScript('js/sizzle.min.js', function(){
	// 		// console.log(Sizzle('#msg span')); /*Need to download the Sizzle file*/
	// 		// Sizzle('#msg span')[0].textContent = "Work";
	// 		onReadySelect();
	// 	});
	// }
});

function onReadySelect(){
	var span = q('#msg span')[0],
		innertext = (span.innertext == undefined) ? 'textContent':'innertext';

	span[innertext] = 'Yay! WE made it!';

}

addOnReady(function(){
	console.log("4 window is loaded");

	if (false && Modernizr.audio.mp3) {
		var snd = new Audio();
		snd.src = "sample.mp3";
		snd.play();
	}
});

/*function addOnReady(fun){
	var last = window.onload;
		isReady = false;
	if(document.addEventListener){
		document.addEventListener('DOMContentLoaded', function(){
			console.log("DOM is loaded");
			isReady = true;
			fun();
		});
	}

	window.onload = function(){
		if(last) last();
		if(isReady) fun();
	}
}
*/

/*function loadScript(path, callback){
	var js = document.createElement('script');
		js.src = path;
		js.type = 'text/javascript';
		js.onload = function(){
			callback();
			this.onload = this.onreadystatechange = null;
		};

	js.onreadystatechange = function(){
		if(this.readState == 'complete'){
			this.onload();
		}
	}

	document.getElementsByTagName('head')[0].appendChild(js);
}*/