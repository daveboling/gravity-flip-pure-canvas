(function(){
  'use strict';
  angular.module('falldown')
  .controller('MainCtrl', ['$scope', function($scope){
    $scope.title = 'FALLLL';
    var game = null;

    document.addEventListener('deviceready', function(){
      game = new Game();
    });

    $scope.start = function(){
      game.start();
      console.log('start');
    };
  }]);
})();
