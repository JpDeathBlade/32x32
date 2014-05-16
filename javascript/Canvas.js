var Canvas = function()
{
	var Constructor = function Canvas(_id, _width, _height, _scale, _fps)
	{
		var id = _id;
		var width = _width;
		var height = _height;
		var scale = _scale;
		var fps = _fps;
		
		//Elements
        var canvasElement_FrontBuffer = $("<canvas id='" + _id + "_FrontBuffer" +
			"' width='" + width + 
        	"' height='" + height + "' style='display:none;'></canvas>");
        	
        var canvasElement_BackBuffer = $("<canvas id='" + _id + "_BackBuffer" +
			"' width='" + (width * scale) + 
        	"' height='" + (height * scale) + "'></canvas>");
        	
        //Render Variables
        var frameBuffer = document.createElement('img');
        var context_FrontBuffer = canvasElement_FrontBuffer.get(0).getContext("2d");
        var context_BackBuffer = canvasElement_BackBuffer.get(0).getContext("2d");
        
        //Add elements to the web page
        this.appendCanvasTo = function(_elementId)
        {
        	canvasElement_FrontBuffer.appendTo(_elementId);
        	canvasElement_BackBuffer.appendTo(_elementId);
        };
        
        //Call this after you are done drawing
        this.endRender = function()
        {
        	console.log("End Render");
        	
        	console.log(" - Save front buffer");
        	frameBuffer.src = canvasElement_FrontBuffer.get(0).toDataURL('image/png');

			console.log(" - Set up back buffer");
        	context_BackBuffer.mozImageSmoothingEnabled = false;
			context_BackBuffer.webkitImageSmoothingEnabled = false;
			context_BackBuffer.msImageSmoothingEnabled = false;
			context_BackBuffer.imageSmoothingEnabled = false;
			
			console.log(" - Draw front buffer to back buffer");
			context_BackBuffer.drawImage(frameBuffer, 0, 0, 
				(width * scale),
				(height * scale));
        };
        
        this.fillStyle = function(_hexColor)
        {
        	context_FrontBuffer.fillStyle = _hexColor;
        };
        
        this.fillRect = function(_x, _y, _w, _h)
        {
        	context_FrontBuffer.fillRect(_x, _y, _w, _h);
        };
        
        this.drawPixel = function(_x, _y, _hexColor)
        {
        	context_FrontBuffer.fillStyle = _hexColor;
        	context_FrontBuffer.fillRect(_x, _y, 1, 1);
        };

		this.getFPS		= function() { return fps; };
		this.getWidth	= function() { return width; };
		this.getHeight	= function() { return height; };
		this.getScale	= function() { return scale; };
		
		this.setFPS		= function(_fps)	{ fps = _fps; };
		//TODO: Update element sizes
		this.setWidth	= function(_width)	{ width = _width; };
		this.setHeight	= function(_height)	{ height = _height; };
		this.setScale	= function(_scale)	{ scale = _scale; };
		
		this.Log = function()
		{
			console.log("Canvas ID: " + id);
			console.log(" - " + width + "x" + height + "px @ " + fps + "fps");
		};
	};
	
	return Constructor;
}();