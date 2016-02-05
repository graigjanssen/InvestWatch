var app = angular.module('InvestWatchApp',
  ['ngRoute', 'searchCtrl', 'listCtrl', 'detailCtrl', 'financeApiFactory', 'usersApiFactory']);

app.config(['$routeProvider', function($routeProvider){
  $routeProvider.when('/', {
    templateUrl: '/partials/watchlist.html',
    controller: 'WatchlistController'
  })
  .when('/stocks/:ticker', {
    templateUrl: '/partials/stock-detail.html',
    controller: 'StockDetailController'
  })
  .otherwise({
    redirectTo: '/'
  });
}]);
