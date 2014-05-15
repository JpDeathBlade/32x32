var Board = function() {
	var Constructor = function Board(_id, _width, _height) {
		
		var boardWidth = 8;
		var boardHeight = 8;
		
		var cell = new Array(boardWidth)
		for (var i = 0; i < boardWidth; i++)
		{
    		cell[i] = new Array(boardHeight);
		}
	
		this.getCanvasElement = function() { return canvasElement; };
		this.getContext = function() { return context };
		this.getFPS = function() { return fps; };
		this.getWidth = function() { return width; };
		this.getHeight = function() { return height; };
		
		this.setFPS = function(_fps) { fps = _fps; };
		this.setWidth = function(_width) { width = _width; };
		this.setHeight = function(_height) { height = _height; }
		
		this.Draw = function(_canvas) {
			context = _canvas.getContext();
			
			//Draw the board
			temp = true;
			for (var i = 0; i < boardWidth; i++)
			{
				for (var j = 0; j < boardHeight; j++)
				{
					if(temp == true) {
						context.fillStyle = "#CECECE";
					}
					else {
						context.fillStyle = "#AA9472";
					}
    				context.fillRect(j*4,i*4,4,4);
    				
    				temp = !temp;
    			}
    			
    			temp = !temp;
    		}
    		
    		//Draw Pieces 
		};
		
		this.Log = function() {
			console.log("Canvas ID: " + id);
			console.log(" - " + width + "x" + height + "px @ " + fps + "fps");
		};
	};
	
	return Constructor;
}();