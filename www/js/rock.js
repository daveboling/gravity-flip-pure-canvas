/* exported Rock */
var Rock = (function(){
  'use strict';

  function Rock(line){
    this.width = 40;
    this.height = 40;
    this.x = line.x;
    this.y = line.y;
    this.isCollided = false;
  }

  Rock.prototype.draw = function(game){
    game.ctx.fillRect(this.x, this.y, this.width, this.height);
  };

  Rock.prototype.update = function(line, game){
    this.y = line.y;
    this.checkCollision(game.ship);
  };

  Rock.prototype.checkCollision = function(ship){
    //if(rock.x and rock.y === ship.x && ship.y)
    var sumsquares = Math.pow(this.x - ship.x, 2) + Math.pow(this.y - ship.y, 2),
        distance = Math.sqrt(sumsquares);

    if(distance < 5){
      this.isCollided = true;
    }
  };


  return Rock;

})();
