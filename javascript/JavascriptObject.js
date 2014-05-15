var JavascriptObject = function() {
	
	var privateStaticMethod = function() {};
	var privateStaticVariable = "foo";
	
	var constructor = function JavascriptObject(_param) {
		
		var privateMethod = function() {};
		this.publicMethod = function() {};
	};
	
	constructor.publicStaticMethod = function() {};
	return constructor;
}();