/* exported Rock */
var Rock = (function(){
  'use strict';

  function Rock(line){
    this.width = 40;
    this.height = 40;
    this.x = line.x;
    this.y = line.y;
  }

  Rock.prototype.draw = function(game){
    game.ctx.fillRect(this.x, this.y, this.width, this.height);
  };

  Rock.prototype.update = function(line){
    this.y = line.y;
  };

  Rock.prototype.checkShipPosition = function(ship){
    //if(rock.x and rock.y === ship.x && ship.y)
  };
  return Rock;
})();
