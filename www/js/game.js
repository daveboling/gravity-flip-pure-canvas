/* exported Game */
/* global Ship, Line */

var Game = (function(){
  'use strict';

  //game objects
  function Game(){
    this.canvas        = document.getElementById('canvas');
    this.ctx           = this.canvas.getContext('2d');
    this.canvas.width  = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.assets        = Asset.load();
    this.hasCrashed    = false; //has the ship crashed yet?

    this.listen(); //listen for device orientation change
  }

  Game.prototype.listen = function(){
    window.addEventListener('deviceorientation', function(data){
      this.ship.update(data);
    }.bind(this));
  };

  Game.prototype.loop = function(){
    this.clear(); //clear canvas

    this.ship.draw(this);
    this.line.draw(this);
    this.line.update(this);


    window.requestAnimationFrame(this.loop.bind(this));
  };

  Game.prototype.clear = function(){
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  };

  Game.prototype.start = function(){
    this.hasCrashed = false;
    this.ship = new Ship(this);
    this.line = new Line(this);
    this.loop();
  };

  return Game;

})();
