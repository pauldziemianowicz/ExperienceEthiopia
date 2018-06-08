app.controller('HomeController', ['$window', '$scope', '$state', '$rootScope', 'localStorageService', function($window, $scope, $state, $rootScope, localStorageService) {

  $scope.view = {};
  $scope.data = {};

  $scope.view.bookTrip = function() {
    $rootScope.displayBookingWindow = true;
  };

}]);
