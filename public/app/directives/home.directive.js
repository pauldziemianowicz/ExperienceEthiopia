app.directive('homePage', ['$rootScope', function($rootScope) {
  return {
    restrict: 'E',
    templateUrl: 'app/directives/partials/home.html',
    // controller: 'MainController',
  }
}]);
