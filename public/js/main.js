var app = angular.module('InvestWatchApp', ['ngRoute', 'listCtrl', 'detailCtrl']);

app.config(['$routeProvider', function($routeProvider){
  $routeProvider.when('/', {
    templateUrl: '/partials/watchlist.html',
    controller: 'WatchlistController'
  })
  .when('/:id', {
    templateUrl: '/partials/stock-detail.html',
    controller: 'StockDetailController'
  })
  .otherwise({
    redirectTo: '/'
  });
}]);

app.controller('SearchController', ['$scope', '$http', function($scope, $http){
  $scope.searchTerm = '';

  $scope.tickerSearch = function(){
    $http.get('http://finance.yahoo.com/webservice/v1/symbols/'+ $scope.searchTerm + '/quote?format=json&view=detail').then(function(response){
      console.log(response);
    });
  };
}]);
