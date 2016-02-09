var api = angular.module('financeApiFactory', []);

api.factory('financeApi', ['$http', function($http){
  var baseUrl = '/api/finance/';

  var financeInterface = {};

  financeInterface.getStock = function(ticker){
    return $http.get( baseUrl + ticker);
  };

  return financeInterface;
}]);
