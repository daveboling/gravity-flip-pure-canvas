/*exported Rock*/
var Rock = (function(){
  'use strict';

  function Rock(game){
    this.width = 40;
    this.height = 40;
    this.x = 20;
    this.y = 0;
  }

  Rock.prototype.draw = function(game){
    game.ctx.fillRect(this.x, this.y, this.width, this.height);
  };

  Rock.prototype.update = function(game){
    if(this.y > game.canvas.height){
      this.y = 0;
      this.x = Math.ceil(Math.random() * game.canvas.width);
      game.score += 1;
    }else{
      this.y += 2;
    }
    if(game.score > 2){
      this.y += 4;
    }
    console.log('this.x', this.x);
    console.log('score', game.score);

  };
  return Rock;
})();
