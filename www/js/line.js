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

  Line.prototype.draw = function(game, index){
    game.lines[index].debris.forEach(function(rock){
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
