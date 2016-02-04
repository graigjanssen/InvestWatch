var ctrl = angular.module('searchCtrl', []);

ctrl.controller('SearchController', ['$scope', '$http', function($scope, $http){
  $scope.searchTerm = '';

  $scope.tickerSearch = function(){
    $http.get('http://finance.yahoo.com/webservice/v1/symbols/'+ $scope.searchTerm + '/quote?format=json&view=detail').then(function(response){
      console.log(response);
    });
  };
}]);
