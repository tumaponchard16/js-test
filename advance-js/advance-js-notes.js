/****************************Function Closures*****************************/
function example1(){
	function sayHello(name){
		var text = 'Hello ' + name;
		var sayAlert = function() {
			console.log(text);
		}
		return sayAlert;
	}

	say = sayAlert('Tim');
	say();
}/*return Hello Tim*/

function example2(){
	function sayHello2(name){
		var text = 'Hello' + name;
		var sayAlert = function(){
			console.log(text);
		}
		return sayAlert;
	}
	say2 = sayHello2('Bob')();
}/*return Hello Bob*/

function example3(){
	function say123(){
		var num = 123;
		var sayAlert = function(){
			console.log(num);
		}
		return sayAlert;
	}
	say = say123()();
}/*return 124*/

function example4(){
	function setupSomeGlobals(){
		var num = 555;
		return {
			alertNumber: function() {
				console.log(num);
			},
			increaseNumber: function(){
				num++;
			},
			setNumber: function(x){
				num = x;
			}
		};
	}

	var c = setupSomeGlobals();
	c.alertNumber();
	c.increaseNumber();
	c.alertNumber();
	c.setNumber(555);
	c.alertNumber();
}/*return 555 557 555*/

function example5(){
	var fade = function(node){
		var level = 1;
		var step = function(){
			var hex = level.toString(16);
			node.style.backgroundColor = '#FFFF' + hex + hex;
			if(level<15){
				level += 1;
				setTimeout(step, 100);
			}
		};
		setTimeout(step, 100);
	}
	fade(document.body);
}/*The oputput would be to fade the background color*/

function example6(){
	function sayAlice(){
		var sayAlert = function(){
			console.log(alice);
		}
		var alice = 'Hello Alice';
		return sayAlert;
	}
	sayAlice()();
}/*output: Hello Alice*/

function example7(){
	var myObject = (function inc(){
		var value = 0;
		return {
			increment: function(inc){
				value += typeOf inc === 'number' ? inc : 1;
			},
			getValue: function(){
				return value;
			}
		};
	}());
	myObject.increment(5);
	console.log(myObject.getValue());
}/*output: 5*/

function example8(){
	var counter = (function(){
		var privateCounter = 0;
		function changeBy(val){
			privateCounter += val;
		}
		return {
			increment: function(){
				changeBy(1);
			},
			decrement: function(){
				changeBy(-1);
			},
			value: function(){
				return privateCounter;
			}
		}
	}());

	console.log(Counter.value()); //Prints 0
	Counter.increment();
	Counter.increment();
	console.log(Counter.value()); //Prints 2
	counter.decrement();
	console.log(Counter.value()); //Prints 1
}

function example9(){
	var funcs = [];
	function createFunc(i){
		return function(){
			console.log('My value: ' + i);
		}
	}
	for(var i=0; i<3; i++){
		funcs[i] = createFunc(i);
	}
	for(var j=0; j<3; j++){
		funcs[j]();
	}m  
}/*output: 
	My value: 0
	My value: 1
	My value: 2
*/

/****************************Function as Objects*****************************/
function example1(){
	function add(x, y){
		return (x+y);
	}
	console.log(add(2, 3));
}/*output: 5*/

function example2(){
	var add = function(x,y){
		return (x+y);
	}
	console.log(add(2,3));
}/*output: 5*/

function example3(){
	var add = new Function("x", "y", "return(x+y);");
	console.log(add(2,3));
}/*output: 5*/

// Arguments property
function example4(){
	var sum = function(){
		var i, sum = 0;
		for(i=0; i<arguments.length; i++){
			sum +=arguments[i];
		}
		return sum;
	};
	console.log(sum(4,8,15,16,23,42)); 
}/*output: 108*/  

// Callee property
function example5(){
	var factorial = function(n){
		if(n<=0){
			return 1;
		} else{
			return n * arguments.callee(n-1)
		}
	}
	console.log(factorial(4));
}/*output: 24*/ 

// Caller property
function example6(){
	CallLevel();
}
function CallLevel(){
	if(CallLevel.caller === null){
		console.log("Called by the top level");
	} else{
		console.log("Called by another function");
	}
}/*output: Call by the top level*/

// Constructor property
function example7(){
	function myObj(){
		this.number = 1;
	}
	var x = new String("Hi");
	if(x.constructor == String){
		console.log("Object is a string");
	}
	var y = new myObject();
	if(y.constructor == myObj){
		console.log("Object constructor is myObj");
	}
}