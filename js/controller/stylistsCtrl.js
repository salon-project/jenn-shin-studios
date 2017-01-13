angular.module('jennShinApp')
  .controller('stylistsCtrl', function($scope, mainService){
    $scope.stylists = mainService.stylistInfo;
    console.log($scope.stylists);
    console.log('hello');
  })
