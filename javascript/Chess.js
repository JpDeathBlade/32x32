var Chess = function() {
	var Constructor = function Chess() {
		
		var canvas;
		var board;
		
		this.Initialize = function() {
			console.log("Chess: Initialize game...");
			
			//Create the game canvas
			canvas = new Canvas("idChess", 32, 32);
			canvas.appendCanvasTo("body");
			
			//Build the board
			board = new Board();
			
			this.setInterval();
		};
		
		this.setInterval = function() {
			var self = this;
			setInterval(function()
        	{
        		self.Update();
        		self.Draw();
        	}, 1000 / canvas.getFPS());
		};

		this.Update = function() {
			console.log("Update");
		};
		
		this.Draw = function() {
			console.log("Draw");
			var ctx = canvas.getContext();
    	
    		ctx.fillStyle = "#FF0000";
    		ctx.fillRect(10,10,1,1);
    		
    		board.Draw(canvas);
		};

		this.getCanvas = function() { return canvas; };
		
		this.setName = function(_name) { name = _name; };
		this.setGender = function(_gender) { gender = _gender; };
		this.setPoints = function(_points) { points = _points; };
		this.setComfortZone = function(_comfortZone) { comfortZone = _comfortZone; };
		this.setIsNew = function(_new) { isNew = _new; };
		this.setIsInGame = function(_inGame) { isInGame = _inGame; };
		
		this.Log = function() {
			console.log("Chess");
		};
	};
	
	return Constructor;
}();