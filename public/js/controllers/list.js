var ctrl = angular.module('listCtrl', []);

ctrl.controller('WatchlistController', ['$scope', '$cookies', 'usersApi', 'financeApi', function($scope, $cookies, usersApi, financeApi){

  $scope.stocks = [];

  // USER SIGN UP //

  $scope.newUser = {
    username: null,
    password: null
  };

  $scope.createUser = function(){
    usersApi.createUser($scope.newUser).then(function(response){
      var data = response.data;
      if (data.username){
        $scope.msg = "Welcome " + data.username + ", please log in to get started";
      }
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
        $scope.msg = "Something went horribly awry.  Please try again.";
      } else {
        $cookies.put('token', response.data.token);
        $scope.msg = '';
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
    $scope.stocks = [];
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
      console.log('userStocks: ', $scope.userStocks);
      if ($scope.userStocks.length === 0){
        $scope.emptyList = true;
      } else {
        $scope.emptyList = false;
        getUserStocksData($scope.userStocks);
      }
    });
  }
  // USE SYMBOLS FROM USERS STOCKS TO GET COMPANY NAMES AND UPDATED PRICES //

  function getUserStocksData(userStocks){
    userStocks.forEach(function(stock){
      var ticker = stock.symbol;
      financeApi.getStock(ticker).then(function(response){
        var stock = response.data.list.resources[0].resource.fields;
        $scope.stocks.push(stock);
      });
    });
  }
 // REMOVE STOCK FROM USER WATCHLIST //

  $scope.deleteStock = function(ticker) {
    usersApi.deleteStock(ticker).then(function(response){
      updateView();
    });
  };
  updateView();
}]);
