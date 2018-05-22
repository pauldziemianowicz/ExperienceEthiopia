app.controller('SimienMountainsController', ['$window', '$scope', '$state', '$rootScope', 'localStorageService', function($window, $scope, $state, $rootScope, localStorageService) {

  $scope.view = {};
  $scope.data = {};

  $scope.view.contentDropdowns = {
    historyDisplayed: true,
    toggleHistory: function() {
      $scope.view.contentDropdowns.historyDisplayed = !$scope.view.contentDropdowns.historyDisplayed;
    },
    geologyDisplayed: true,
    toggleGeology: function() {
      $scope.view.contentDropdowns.geologyDisplayed = !$scope.view.contentDropdowns.geologyDisplayed;
    },
    nativePeopleDisplayed: true,
    toggleNativePeople: function() {
      $scope.view.contentDropdowns.nativePeopleDisplayed = !$scope.view.contentDropdowns.nativePeopleDisplayed;
    },
    nativePeopleDisplayed: true,
    toggleNativePeople: function() {
      $scope.view.contentDropdowns.nativePeopleDisplayed = !$scope.view.contentDropdowns.nativePeopleDisplayed;
    },
    wildlifeDisplayed: true,
    toggleWildlife: function() {
      $scope.view.contentDropdowns.wildlifeDisplayed = !$scope.view.contentDropdowns.wildlifeDisplayed;
    },
  };


}]);
