/*exported Game*/
/*global Rock*/
var Game = (function(){
  'use strict';

  function Game(){
    var headerHeight = window.innerHeight,
    bodyHeight = document.getElementsByTagName('ion-header-bar')[0].clientHeight;

    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.canvas.height = bodyHeight - headerHeight;
    this.canvas.width = window.innerWidth;
  }

  Game.prototype.loop = function(){
    this.clear();
    this.rock.draw(this);
    this.rock.update(this);
    window.requestAnimationFrame(this.loop.bind(this));
    console.log('this', this);
  };

  Game.prototype.start = function(){
    this.rock = new Rock(this);
    this.loop();
  };

  Game.prototype.clear = function(){
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  };

  return Game;
})();
