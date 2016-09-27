var ctrl = angular.module('detailCtrl', []);

ctrl.controller('StockDetailController',
  ['$scope', '$routeParams', '$cookies', '$location', 'financeApi', 'usersApi', function($scope, $routeParams, $cookies, $location, financeApi, usersApi){

    $scope.stock = {};

    function tickerSearch(ticker){
      financeApi.getStock(ticker).then(function(response){
        $scope.stock = response.data.query.results.quote;
        //Quick fix to help format company name
        if ($scope.stock.Name.match(/Common/g)){
          $scope.stock.Name = formatName($scope.stock.Name);
        }
        checkUserStatus();
      });
    }
    function formatName(name){
      var cutoff = name.indexOf('Common') - 1;
      return name.slice(0, cutoff);
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
