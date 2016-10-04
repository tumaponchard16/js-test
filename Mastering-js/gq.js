(function(scope, isForgiving){
	var version = 1.0003; /*this version variable is onlya accesible in this function*/
	console.log("my version is" + version);

	var doc = scope.document;
	var q;

	var gQ = function(selector, context){
		return q.query(selector, context);
	}

	gQ.loadJS = function(path, callback){
		var js = doc.createElement('script');
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
		doc.getElementsByTagName('head')[0].appendChild(js);
	}

	gQ.ready = function(fun){
		var last = window.onload;
			isReady = false;
		if(doc.addEventListener){
			doc.addEventListener('DOMContentLoaded', function(){
				console.log("DOM is loaded");
				isReady = true;
				fun();
			});
		}
	}	

	window.onload = function(){
		if(last) last();
		if(isReady) fun();
	}

	gQ.toArray = function(item){
		var len = item.length;
		var out = [];
		if(len>0){
			for(var i=0; i<len; i++){
				out[i] = item[i];
			}
		} else{
			out[0] = item;
		}

		return out;
	};

	gQ.start = function(){};
	gQ.version = function(){
		return version;
	}

	gQ.ready(function(){
		if('jquery' in scope){
			q = QueryFacade.create(jQueryAdapter,scope.jQuery. doc);
			gQ.start();
		}
		else if(doc.querySelectorAll && doc.querySelectorAll('body:first-of-type')){
			// console.log("yes we have it");
			q = QueryFacade.create(NativeQuery, null, doc);

		} else{
			gQ.loadJS('js/sizzle.min.js', function(){
				q = QueryFacade.create(SizzleAdapter, Sizzle, doc);
				gQ.start();
			});
		}
	});

	QueryFacade = function(adapter){
		// this.adapter = adapter;
		var dom = function(){
			return adapter.context;
		},
		query = function(selector, context){
			return new QueryFacade(adapter.query(selector, context));
		},
		text = function(value){
			return adapter.text(value);
		}; 
		return {dom:dom, query:query, text:text};
	}

	QueryFacade.create = function(adapter, lib, context){
		return QueryFacade(new adapter(lib, context))
	} 

	NativeQuery = function(context){this.context = context;}
	NativeQuery.prototype.query = function(selector, context){
		var context = context || this.context;
		return new NativeQuery(gQ.toArray(context.querySelectorAll(selector)));
	};

	NativeQuery.prototype.text = function(value){
		innerText = (this.context[0].innerText===undefined) ? 'texContent' : 'innerText';

		for(var item in this.context){
			this.context[item][innerText] = value;
		}
		return value;
	}

	SizzleAdapter = function(lib, context){
		this.lib=lib;
		this.context = context;
	};
	SizzleAdapter.prototype.query = function(selector, context){
		var context = context || doc;
		return new SizzleAdapter(this.lib, gQ.toArray(this.lib(selector, context)));
	};
	SizzleAdapter.prototype.text = NativeQuery.prototype.text;


	jQueryAdapter = function(lib, context){
		this.lib = lib;
		this.context = context;
		this.target = lib(context);
	};
	jQueryAdapter.prototype.query = function(selector, context){
		var context = context || doc;
		return new jQueryAdapter(this.lib, this.lib(selector, context).get());
	};

	jQueryAdapter.prototype.text = function(value){
		return this.target.text(value);
	}

	var Ticker = (function(){
		var instance;

		function create(){
			var index = 0;

			function add(interval, times, callback, name){
				name = name || (++index);
			}
			return {add:add};
		}

		return{getInstance:function(){
			if(!instance){
				instance = create();
			}return instance;
		}}
	})();

	Ticker.getInstance();

	if(!scope.gQ){
		scope.gQ = gQ;
	}else{
		if(isForgiving && scope.gQ.version){
			scope.gQ = scope.gQ.version()>version ? scope.gQ : gQ;
		}else{	
			throw new Error("The variable window.gQ already exists.!");
		}
	}

}(scope, true));

/*var com = com || {};
	com.chardie = com.chardie || {};

if(com.chardie.gQ){
	com.chardie.gQ = function(selector, context){
		// ...
	}

	com.chardie.gQ.loadJS = function(){
		// ...
	}
}*/