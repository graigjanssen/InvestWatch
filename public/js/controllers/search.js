var ctrl = angular.module('searchCtrl', []);

ctrl.controller('SearchController', ['$scope', 'financeApi', function($scope, financeApi){
  $scope.searchTerm = '';

  $scope.tickerSearch = function(){
    financeApi.getStock($scope.searchTerm).then(function(response){
      console.log(response);
      var stock = response.data.list.resources[0].resource.fields;
      console.log(stock);
    });
  };
}]);
