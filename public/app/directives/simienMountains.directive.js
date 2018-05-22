app.directive('simienMountains', ['$rootScope', function($rootScope) {
  return {
    restrict: 'E',
    templateUrl: 'app/directives/partials/simien_mountains.html',
    controller: 'SimienMountainsController',
  };
}]);
