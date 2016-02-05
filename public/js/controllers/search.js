var ctrl = angular.module('searchCtrl', []);

ctrl.controller('SearchController', ['$scope', '$location', function($scope, $location){
  $scope.searchTerm = '';

  $scope.searchTicker = function(){
    $location.path($scope.searchTerm);
    $scope.searchTerm = '';
  };

  // $scope.tickerSearch = function(){
  //   financeApi.getStock($scope.searchTerm).then(function(response){
  //     var stock = response.data.list.resources[0].resource.fields;
  //     console.log(stock);
  //   });
  // };
}]);
