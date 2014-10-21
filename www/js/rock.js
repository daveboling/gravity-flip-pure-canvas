/* exported Rock */
var Rock = (function(){
  'use strict';

  function Rock(line){
    this.width        = 40;
    this.height       = 40;
    this.x            = line.x;
    this.y            = line.y;
    this.rockImgIndex = Math.floor((Math.random() * 3));
  }

  Rock.prototype.draw = function(game){
    var rockImgs     = [game.assets.asteroid1, game.assets.asteroid2, game.assets.asteroid3];
    //game.ctx.fillRect(this.x, this.y, this.width, this.height);
    game.ctx.drawImage(rockImgs[this.rockImgIndex], this.x, this.y, this.width, this.height);
  };


  Rock.prototype.update = function(line){
    this.y = line.y;
  };

  Rock.prototype.checkShipPosition = function(ship){
    //if(rock.x and rock.y === ship.x && ship.y)
  };
  return Rock;
})();
