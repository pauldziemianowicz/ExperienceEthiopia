app.directive('threeDayHikingTour', ['$rootScope', function($rootScope) {
  return {
    restrict: 'E',
    templateUrl: 'app/directives/partials/three_day_hiking_tour.html',
    controller: 'TourPackagesController',
  }
}]);
