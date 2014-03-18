var Game = require('./index');

var game = Game({
	width: 500,
	height: 500
});

game.on('update', function(dt){
	//console.log(dt);
});

game.on('draw', function(context){
	//console.log(context)
	context.fillStyle = '#82d6e1';
	context.fillRect(0, 0, game.width, game.height);
});

game.start();