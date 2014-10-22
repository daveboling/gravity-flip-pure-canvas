/* exported Line */
/* global Rock */

var Line = (function(){
  'use strict';

  function Line(game){
    this.x = 0;
    this.y = 20;
    this.debris = [];

    this.create(game);
  }

  Line.prototype.draw = function(game){
    game.line.debris.forEach(function(rock){
      rock.draw(game);
    });
  };

  Line.prototype.create = function(game){
    var currentX = 0,
    debrisToDraw = Math.floor((Math.random() * 4) + 1), //number of objects
    debrisPos = [],
    nums = [],
    maxNum = 6,
    num;

    while (nums.length < debrisToDraw) {
      num = Math.floor(Math.random() * maxNum);
      if (nums.indexOf(num) === -1) {
        nums.push(num);
      }
    }

    for(var i = 0; i < 6; i++){
      debrisPos.push(Math.floor(Math.random()*6));
      this.debris.push(new Rock({y: 20, x: currentX}));
      currentX += window.innerWidth/6;
    }
  };

  Line.prototype.update = function(game){
   if(this.y > game.canvas.height){
      this.y = 0;
      this.x = Math.ceil(Math.random() * game.canvas.width);
    }else{
      this.y += 1;
    }

    this.debris.forEach(function(rock){
      rock.update(this);
    }.bind(this));
  };

  return Line;
})();
