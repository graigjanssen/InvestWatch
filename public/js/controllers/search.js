var ctrl = angular.module('searchCtrl', []);

ctrl.controller('SearchController', ['$scope', '$location', function($scope, $location){
  $scope.searchTerm = '';
  var path = '/stocks/';
  $scope.searchTicker = function(){
    $location.path(path + $scope.searchTerm);
    $scope.searchTerm = '';
  };
}]);
