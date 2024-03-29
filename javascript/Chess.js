var Chess = function()
{
	var Constructor = function Chess()
	{
		var canvas;
		var board;
		
		this.Initialize = function()
		{
			console.log("Chess: Initialize game...");
			
			//Create the game canvas
			canvas = new Canvas("idChess", 32, 32, 10, 30);
			canvas.appendCanvasTo("body");
			
			//Build the board
			board = new Board();
			
			this.setInterval();
		};
		
		this.setInterval = function()
		{
			var self = this;
			setInterval(function()
        	{
        		self.Update();
        		self.Draw();
        	}, 1000 / canvas.getFPS());
		};

		this.Update = function()
		{
			console.log("Update");
		};
		
		this.Draw = function()
		{
			console.log("Draw");
    	
    		canvas.fillStyle("#FF0000");
    		canvas.fillRect(10,10,1,1);
    		
    		board.Draw(canvas);
    		
    		canvas.endRender();
		};

		this.getCanvas = function() { return canvas; };
		
		this.Log = function()
		{
			console.log("Chess");
		};
	};
	
	return Constructor;
}();