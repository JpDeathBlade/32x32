var TicTacToe = function()
{
	var Constructor = function TicTacToe()
	{
		var canvas;
		
		this.Initialize = function()
		{
			console.log("TicTacToe: Initialize game...");
			
			//Create the game canvas
			canvas = new Canvas("idTicTacToe", 3, 3, 100, 30);
			canvas.appendCanvasTo("body");
			
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
    		canvas.fillRect(0,0,1,1);
    		canvas.fillRect(1,1,1,1);
    		canvas.fillRect(2,2,1,1);
    		
    		canvas.fillStyle("#0000FF");
    		canvas.fillRect(0,1,1,1);
    		
    		canvas.endRender();
		};

		this.getCanvas = function() { return canvas; };
		
		this.Log = function()
		{
			console.log("TicTacToe");
		};
	};
	
	return Constructor;
}();