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
    asset.asteroid4 = new Image();
    asset.asteroid4.src = 'img/assets/asteroid4.jpg';
    asset.asteroid5 = new Image();
    asset.asteroid5.src = 'img/assets/asteroid5.jpg';
    asset.asteroid6 = new Image();
    asset.asteroid5.src = 'img/assets/asteroid6.jpg';
    asset.jupiter = new Image();
    asset.jupiter.src = 'img/assets/jupiter.jpg';
    asset.mars = new Image();
    asset.mars.src = 'img/assets/mars.jpg';
    asset.venus = new Image();
    asset.venus.src = 'img/assets/venus.jpg';
    asset.neptune = new Image();
    asset.neptune.src = 'img/assets/neptune.jpg';


    return asset;
  };

  return Asset;
})();
