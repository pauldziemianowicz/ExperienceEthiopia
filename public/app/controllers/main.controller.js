app.controller('MainController', ['$scope', '$rootScope', 'localStorageService', function($scope, $rootScope, localStorageService) {

  $scope.view = {};
  $scope.data = {};
  $scope.uploader = {};

  $scope.view.aboutUsDropdownVisible = false;
  $scope.view.hikingToursDropdownVisible = false;

  $scope.view.toggleAboutUsDropdown = function(state) {
    $scope.view.aboutUsDropdownVisible = state;
  };

  $scope.view.toggleHikingToursDropdown = function(state) {
    $scope.view.hikingToursDropdownVisible = state;
  };

  $scope.view.homeLearnMoreNav = function() {

  };

}])
