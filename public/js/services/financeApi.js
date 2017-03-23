var api = angular.module('financeApiFactory', []);

api.factory('financeApi', ['$http', function($http){
  var baseUrl = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22';

  var financeInterface = {};

  financeInterface.getStock = function(ticker){
    return $http.get( baseUrl + ticker + '%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=');
  };

  return financeInterface;
}]);
