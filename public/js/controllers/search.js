var ctrl = angular.module('searchCtrl', []);

ctrl.controller('SearchController', ['$scope', '$location', function($scope, $location){
  $scope.searchTerm = '';

  $scope.searchTicker = function(){
    $location.path($scope.searchTerm);
    $scope.searchTerm = '';
  };
}]);
