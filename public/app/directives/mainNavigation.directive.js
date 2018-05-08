app.directive('mainNavigation', ['$rootScope', function($rootScope) {
  return {
    restrict: 'E',
    templateUrl: 'app/directives/partials/main_navigation.html',
    controller: 'MainNavigationController',
  }
}]);
