(function(){
  'use strict';
  var main = angular.module('falldown');

  main.controller('MainCtrl', ['$scope', function($scope){
    $scope.gameActive = false;

    //wait for device ready and then load the game
    document.addEventListener('deviceready', function(){
      game = new Game();
    });

    //start game on user click
    $scope.start = function(){
      $scope.gameActive = true;
      game.start();
    };
  }]);
})();
