/* exported Asset */

var Asset = (function(){
  'use strict';

  function Asset(){
  }

  Asset.load = function(){
    var asset = {};

    asset.ship = new Image();
    asset.ship.src = 'img/assets/ship.png';

    return asset;
  };

  return Asset;
})();
