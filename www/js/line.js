/* exported Line */
/* global Rock */

var Line = (function(){
  'use strict';

  function Line(game){
    this.x = 0;
    this.y = game.canvas.height + 20;
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
    debrisToDraw = Math.ceil((Math.random() * 12) + 1);

    for(var i = 0; i < debrisToDraw; i++){
      this.debris.push(new Rock({y: 20, x: currentX}));
      currentX += 100;
    }
  };

  Line.prototype.checkCollision = function(game){
    this.debris.forEach(function(rock){
      if(rock.isCollided === true){
        return true;
      }
    });
  };

  Line.prototype.update = function(game){
   if(this.y < 0){
      this.y = game.canvas.height;
      this.x = Math.ceil(Math.random() * game.canvas.width);
    }else{
      this.y -= 2;
    }

    this.debris.forEach(function(rock){
      rock.update(this, game);
    }.bind(this));
    //here goes a function to check position of game.ship against position of each rock in this line
    //put htis inside
  };

  return Line;
})();
