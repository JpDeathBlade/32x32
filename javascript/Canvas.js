var Canvas = function() {
	var Constructor = function Canvas(_id, _width, _height) {
		
		var id = _id;
		var width = _width;
		var height = _height;
		var fps = 30;
		
		var canvasElement = $("<canvas id='" + _id + 
			"' class='" + "canvas_Zoom50" +
			"' width='" + width + 
        	"' height='" + height + "'></canvas>");
        var context = canvasElement.get(0).getContext("2d");
        
        this.appendCanvasTo = function(_elementId) {
        	canvasElement.appendTo(_elementId);
        }

		this.getCanvasElement = function() { return canvasElement; };
		this.getContext = function() { return context };
		this.getFPS = function() { return fps; };
		this.getWidth = function() { return width; };
		this.getHeight = function() { return height; };
		
		this.setFPS = function(_fps) { fps = _fps; };
		this.setWidth = function(_width) { width = _width; };
		this.setHeight = function(_height) { height = _height; }
		
		this.Log = function() {
			console.log("Canvas ID: " + id);
			console.log(" - " + width + "x" + height + "px @ " + fps + "fps");
		};
	};
	
	return Constructor;
}();