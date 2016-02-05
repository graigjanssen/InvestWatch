var ctrl = angular.module('detailCtrl', []);

ctrl.controller('StockDetailController',
  ['$scope', '$routeParams', 'financeApi', function($scope, $routeParams, financeApi){

    $scope.stock = {};

    function tickerSearch(ticker){
      financeApi.getStock(ticker).then(function(response){
        $scope.stock = response.data.list.resources[0].resource.fields;
        console.log($scope.stock);
      });
    }

    var ticker = $routeParams.ticker;
    tickerSearch(ticker);
}]);
