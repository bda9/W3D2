'use strict';
myApp.controller('FirstCtrl', function($scope, ourSvc) {

  $scope.reallyLike = ourSvc.reallyLike;
  $scope.kindOfLike = ourSvc.kindOfLike;

  $scope.addArtist = function() {
    var artist = buildArtist();
    ourSvc.addNewArtist(artist);
    removeArtist();
  };

  function buildArtist() {
    return {
      name: $scope.name,
      genre: $scope.genre,
      score: $scope.score
    }
  }
//$scope.foo = ourSvc.buildArtist()

  function removeArtist() {
    $scope.name = '';
    $scope.genre = '';
    $scope.score = '';
  }
});
