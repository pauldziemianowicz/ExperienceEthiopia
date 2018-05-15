app.controller('TourPackagesController', ['$window', '$scope', '$state', '$rootScope', 'localStorageService', function($window, $scope, $state, $rootScope, localStorageService) {

  $scope.view = {};
  $scope.data = {};

  $scope.view.threeDayHikingTour = {
    tripItineraryDisplayed: true,
    toggleTripItinerary: function() {
      $scope.view.threeDayHikingTour.tripItineraryDisplayed = !$scope.view.threeDayHikingTour.tripItineraryDisplayed;
      console.log($scope.view.threeDayHikingTour.tripItineraryDisplayed);
    },
  };


  $(window).on('mouseover', function(event) {

    var className = event.target.className;

    $scope.$apply();
  });

}]);
