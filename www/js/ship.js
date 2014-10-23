/* exported Ship */

var Ship = (function(){
  'use strict';
  function Ship(game){
    this.height          = 30;
    this.width           = 30;
    this.x               = game.canvas.width / 2; //should start a ship right in the middle
    this.y               = 5; //initially this values
    this.flippedx        = game.canvas.width - 5; //gravity flip position
    this.flippedy        = game.canvas.height / 2; //gravity flip position
    this.gravityFlipped  = false;
    this.flipped         = false;
   }

  //draw the ship on the canvas
  Ship.prototype.draw = function(game){
    this.x = this.x < 0 ? 0 : this.x;
    this.x = this.x > game.canvas.width - 45 ? game.canvas.width - 45 : this.x;

    this.y = this.y < 0 ? 0 : this.y;
    this.y = this.y > game.canvas.height - 45 ? game.canvas.height - 45 : this.y;
    game.ctx.drawImage(game.assets.ship, this.x, this.y, this.width, this.height);
    if(this.flipped){
      game.ctx.translate(this.width / 2, this.height / 2);
      game.ctx.rotate(Math.PI / 2);
    }
  };

  //update positon based on accelerometer
  Ship.prototype.update = function(positon){
    this.x += positon.gamma;

    if(this.gravityFlipped){
      this.y += positon.beta;
    }
    if(!this.gravityFlipped){
      this.y = 5;
    }
  };


  Ship.prototype.gravityFlip = function(){
    this.gravityFlipped = !this.gravityFlipped;
  };

  return Ship;

})();
