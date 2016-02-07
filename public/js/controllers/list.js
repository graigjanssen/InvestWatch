var ctrl = angular.module('listCtrl', []);

ctrl.controller('WatchlistController', ['$scope', '$cookies', 'usersApi', function($scope, $cookies, usersApi){

  // USER SIGN UP //

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

  // USER LOG IN/OUT //

  $scope.user = {
    username: null,
    password: null
  };

  $scope.logInUser = function(){
    usersApi.logInUser($scope.user).then(function(response){
      if (response.data.description === 'invalid'){
        $scope.msg = "Something went horribly awry.  Please try again, and don't screw it up this time.";
      } else {
        $cookies.put('token', response.data.token);
      }
      $scope.user = {};
      updateView();
    });
  };

  $scope.logOut = function() {
    $cookies.remove('token');
    updateView();
  };

  // MAKE VIEW DEPENDENT ON LOG IN STATUS //

  function updateView() {
    if ($cookies.get('token')) {
      $scope.loggedIn = true;
      getUserData();
    } else {
      $scope.loggedIn = false;
    }
  }

  function getUserData(){
    usersApi.currentUser().then(function(response){
      var user = response.data.user;
      $scope.username = user.username;
      $scope.userStocks = user.stocks;
      if ($scope.userStocks.length === 0){
        $scope.emptyList = true;
      } else {
        $scope.emptyList = false;
      }
    });
  }

  updateView();
}]);
