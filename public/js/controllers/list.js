var ctrl = angular.module('listCtrl', []);

ctrl.controller('WatchlistController', ['$scope', '$cookies', 'usersApi', function($scope, $cookies, usersApi){
  $scope.currentUser = '';

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

  $scope.logInUser = function(){
    usersApi.logInUser($scope.user).then(function(response){
      $cookies.put('token', response.data.token);
      $scope.user = {};
    });
  };

  function showCookie(){
    if ($cookies.get('token')){
      console.log('Logged in');
    } else {
      console.log('Logged out');
    }
  }
  function removeCookie(){
    $cookies.remove('token');
  }
  showCookie();
  removeCookie();


}]);
