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
    this.clock         = 0;
    this.lines         = [];
    this.currentLine   = 0;
    this.listen(); //listen for device orientation change
  }

  Game.prototype.listen = function(){
    window.addEventListener('deviceorientation', function(data){
      this.ship.update(data.gamma);
    }.bind(this));
  };

  Game.prototype.loop = function(){
    this.clear(); //clear canvas
    var self = this;

    this.ship.draw(this);
    console.log(this.currentLine);
    this.lines[this.currentLine].draw(this, this.currentLine);
    this.lines[this.currentLine].update(this, this.currentLine);

    window.requestAnimationFrame(this.loop.bind(this));
  };

  Game.prototype.clear = function(){
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  };

  Game.prototype.timer = function(){
    this.clock += 1;
    if(this.clock % 3 === 0){
      this.lines.push(new Line(this));
      this.currentLine++;
    }
    console.log(this.currentLine);
  };

  Game.prototype.start = function(){
    setInterval(this.timer.bind(this), 1000);
    this.hasCrashed = false;
    this.ship = new Ship(this);
    this.lines.push(new Line(this));
    this.loop();
  };

  return Game;

})();
