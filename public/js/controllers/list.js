var ctrl = angular.module('listCtrl', []);

ctrl.controller('WatchlistController', ['$scope', 'usersApi', function($scope, usersApi){
  $scope.newUser = {
    username: null,
    password: null
  };

  $scope.createUser = function(){
    usersApi.createUser($scope.newUser).then(function(response){
      console.log(response);
      $scope.newUser = {};
    });
  };
  $scope.user = {
    username: null,
    password: null
  };
}]);
