app.directive('bookingWindow', ['$rootScope', function($rootScope) {
  return {
    restrict: 'E',
    scope: {
      show: '='
    },
    transclude: true,
    templateUrl: 'app/directives/partials/booking_window.html',
    controller: 'BookingController',
  };
}]);
