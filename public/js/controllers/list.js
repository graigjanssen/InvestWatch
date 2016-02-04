var ctrl = angular.module('listCtrl', []);

ctrl.controller('WatchlistController', ['$scope', '$http', function($scope, $http){
  $scope.title = 'Watchlist';
}]);
