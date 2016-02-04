var api = angular.module('financeApiFactory', []);

api.factory('financeApi', ['$http', function($http){
  var baseUrl = 'http://localhost:8080/api/finance/';

  var financeInterface = {};

  financeInterface.getStock = function(ticker){
    return $http.get( baseUrl + ticker);
  };

  return financeInterface;
}]);
