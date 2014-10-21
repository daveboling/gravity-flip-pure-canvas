/* exported Rock */
var Rock = (function(){
  'use strict';

  function Rock(line){
    this.width        = window.innerWidth/6;
    this.height       = window.innerWidth/6;
    this.x            = line.x;
    this.y            = line.y;
    this.rockImgIndex = Math.floor((Math.random() * 9));
  }

  Rock.prototype.draw = function(game){
    var rockImgs     = [game.assets.asteroid1, game.assets.asteroid2, game.assets.asteroid3, game.assets.asteroid4, game.assets.asteroid5, game.assets.asteroid6, game.assets.venus, game.assets.jupiter, game.assets.mars, game.assets.neptune];
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
