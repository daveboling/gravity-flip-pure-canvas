/* exported Game */
/* global Ship */

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
    //this.hasCrashed = this.ship.shipCrashed(this.ship);

    this.clear(); //clear canvas

    this.ship.draw(this);
    //if ship crashed, then update flags

    window.requestAnimationFrame(this.loop.bind(this));
  };

  Game.prototype.clear = function(){
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  };

  Game.prototype.start = function(){
    this.hasCrashed = false;
    this.ship = new Ship(this);
    this.loop();
  };

  return Game;


})();
