var ctrl = angular.module('detailCtrl', []);

ctrl.controller('StockDetailController',
  ['$scope', '$routeParams', '$cookies', '$location', 'financeApi', 'usersApi', function($scope, $routeParams, $cookies, $location, financeApi, usersApi){

    $scope.stock = {};

    function tickerSearch(ticker){
      financeApi.getStock(ticker).then(function(response){
        $scope.stock = response.data.list.resources[0].resource.fields;
        checkUserStatus();
      });
    }

    var ticker = $routeParams.ticker;
    tickerSearch(ticker);

    function checkUserStatus(){
      if ($cookies.get('token')){
        $scope.loggedIn = true;
      } else {
        $scope.loggedIn = false;
      }
    }

    $scope.stockToWatchList = function(){
      console.log('Sending to usersApiFactory: ', $scope.stock.symbol);
      usersApi.addStock($scope.stock.symbol).then(function(){
        $location.path('/');
      });
    };

}]);
