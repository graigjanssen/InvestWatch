var ctrl = angular.module('detailCtrl', []);

ctrl.controller('StockDetailController', ['$scope', '$http', function($scope, $http){
  $scope.thing = "Here's a thing!";
}]);
