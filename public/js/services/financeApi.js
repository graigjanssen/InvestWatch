var api = angular.module('financeApiFactory', []);

api.factory('financeApi', ['$http', function($http){
  var baseUrl = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22';

  var financeInterface = {};

  financeInterface.getStock = function(ticker){
    return $http.get( baseUrl + ticker + '%22)%0A%09%09&format=json&env=http%3A%2F%2Fdatatables.org%2Falltables.env');
  };

  return financeInterface;
}]);
