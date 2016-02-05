var ctrl = angular.module('listCtrl', []);

ctrl.controller('WatchlistController', ['$scope', 'usersApi', function($scope, usersApi){
  $scope.title = 'Watchlist';
}]);
