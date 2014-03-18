# gameloop-canvas
> a gameloop designed for the html5 canvas tag
> includes the core methods/events of a game loop: start, end, pause, resume, update, draw

Designed for use with [browserify](http://github.com/substack/node-browserify).

Based on the [gameloop](http://github.com/sethvincent/gameloop) module.

## Requirements
- node.js

## Install

````
npm install --save gameloop-canvas
````

## Usage

### Create a canvas and game object:
```
var game = require('gameloop-canvas')();
````

### Use update and draw events
````
game.on('update', function(dt){});

game.on('draw', function(context){});
````

### Use start, pause, and resume methods
````
game.start();

game.end();

game.pause();

game.resume();
````

These methods have corresponding events:

````
game.on('start', function(){});

game.on('end', function(){});

game.on('pause', function(){});

game.on('resume', function(){});
````


## Contributing
- Fork this repository.
- Create a branch for your changes.
- Include tests if applicable.
- Add/edit documentation for any changes.
- Submit a pull request.

## License
MIT