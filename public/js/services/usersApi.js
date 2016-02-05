var api = angular.module('usersApiFactory', []);

api.factory('usersApi', ['$http', function($http){
  var baseUrl = 'http://localhost:8080/users/';

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

  return usersInterface;
}]);
