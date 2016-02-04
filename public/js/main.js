var app = angular.module('InvestWatchApp', ['$ngRoute', 'listCtrl', 'detailCtrl']);

app.config(['$routeProvider', function($routeProvider){
  $routeProvider.when('/', {
    templateUrl: '/views/partials/watchlist.html',
    controller: 'WatchlistController'
  });
  $routeProivder.when('/:id', {
    templateUrl: '/views/partials/stock-detail.html',
    controller: 'StockDetailController'
  });
  $routeProvider.otherwise({
    redirectTo: '/'
  });
}]);
