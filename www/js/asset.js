/* exported Asset */

var Asset = (function(){
  'use strict';

  function Asset(){
  }

  Asset.load = function(){
    var asset = {};

    asset.ship = new Image();
    asset.ship.src = 'img/assets/ship.png';
    asset.asteroid1 = new Image();
    asset.asteroid1.src = 'img/assets/asteroid1.jpg';
    asset.asteroid2 = new Image();
    asset.asteroid2.src = 'img/assets/asteroid2.jpg';
    asset.asteroid3 = new Image();
    asset.asteroid3.src = 'img/assets/asteroid3.jpg';


    return asset;
  };

  return Asset;
})();
