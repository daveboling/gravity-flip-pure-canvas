/* exported Ship */

var Ship = (function(){
  'use strict';
  function Ship(game){
    this.height = 30;
    this.width  = 30;
    this.x      = game.canvas.width / 2; //should start a ship right in the middle
    this.y      = 0; //initially this values
  }

  //draw the ship on the canvas
  Ship.prototype.draw = function(game){
    game.ctx.drawImage(game.assets.ship, this.x, this.y, this.width, this.height);
  };

  //update positon based on accelerometer
  Ship.prototype.update = function(changeInX){
    this.x += changeInX;
  };

  return Ship;

})();
