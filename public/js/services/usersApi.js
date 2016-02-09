var api = angular.module('usersApiFactory', []);

api.factory('usersApi', ['$http', function($http){
  var baseUrl = '/users/';

  var usersInterface = {};

  usersInterface.currentUser = function(){
    return $http.get(baseUrl + 'current');
  };

  usersInterface.createUser = function( newUserData ) {
    return $http.post(baseUrl, newUserData);
  };

  usersInterface.logInUser = function( userData ){
    return $http.post(baseUrl + 'authenticate', userData);
  };

  usersInterface.addStock = function(ticker){
    return $http.post(baseUrl + 'stocks', {symbol: ticker});
  };

  usersInterface.deleteStock = function(ticker){
    return $http.delete(baseUrl + 'stocks/' + ticker);
  };

  return usersInterface;
}]);
