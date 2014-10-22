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

  Line.prototype.draw = function(game, index){
    game.lines[index].debris.forEach(function(rock){
      rock.draw(game);
    });
  };

  Line.prototype.create = function(game){
    var currentX = 0,
    debrisToDraw = Math.ceil((Math.random() * 12) + 1);

    for(var i = 0; i < debrisToDraw; i++){
      var objectToSend = {x: currentX, y: 20};
      this.debris.push(new Rock(objectToSend));
      currentX += 100;
    }
  };

  Line.checkCollision = function(lines){
    var crashed = false;
    lines.forEach(function(line){
      line.debris.forEach(function(rock){
        if(rock.isCollided === true){
          crashed = true;
        }
      });
    });

    return crashed;
  };

  Line.prototype.update = function(game){
    //asteroids speed
    this.y -= 1;

    this.debris.forEach(function(rock){
      rock.update(this, game);
    }.bind(this));
    //here goes a function to check position of game.ship against position of each rock in this line
    //put htis inside
  };

  return Line;
})();
