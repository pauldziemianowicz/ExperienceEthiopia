app.controller('MainNavigationController', ['$window', '$scope', '$state', '$rootScope', 'localStorageService', function($window, $scope, $state, $rootScope, localStorageService) {

  $scope.view = {};
  $scope.data = {};
  $scope.uploader = {};
  $scope.siteNavigation = {};

  $scope.view.aboutUsDropdownVisible = false;
  $scope.view.hikingToursDropdownVisible = false;
  $scope.view.tourInformationDropdownVisible = false;
  $rootScope.currentViewState = $state.current.name;

  $(window).on('mouseover', function(event) {

    // Homepage Navigation Menu Dropdown Visibility Logic
    var className = event.target.className;
    if (className === 'nav-option-text about-us') {
      if (!$scope.view.aboutUsDropdownVisible) {
        $scope.view.aboutUsDropdownVisible = true;
        $scope.view.hikingToursDropdownVisible = false;
        $scope.view.tourInformationDropdownVisible = false;
      }
    } else if (className === 'nav-option-text hiking-tours') {
      if (!$scope.view.hikingToursDropdownVisible) {
        $scope.view.hikingToursDropdownVisible = true;
        $scope.view.aboutUsDropdownVisible = false;
        $scope.view.tourInformationDropdownVisible = false;
      }
    } else if (className === 'nav-option-text tour-information') {
      if (!$scope.view.tourInformationDropdownVisible) {
        $scope.view.tourInformationDropdownVisible = true;
        $scope.view.aboutUsDropdownVisible = false;
        $scope.view.hikingToursDropdownVisible = false;

      }
    } else {
      var firstClassListName = event.target.classList[0];
      if (firstClassListName === 'about-us-dropdown' || firstClassListName === 'hiking-tours-dropdown' || firstClassListName === 'dropdown-option' || firstClassListName === 'dropdown-option-text') {
        // do nothing
      } else {
        if ($scope.view.aboutUsDropdownVisible) {
          $scope.view.aboutUsDropdownVisible = false;
        } else if ($scope.view.hikingToursDropdownVisible) {
          $scope.view.hikingToursDropdownVisible = false;
        } else if ($scope.view.tourInformationDropdownVisible) {
          $scope.view.tourInformationDropdownVisible = false;
        }
      };
    };

    $scope.$apply();
  });

  $scope.siteNavigation.navigateToViewState = function(viewState) {
    $state.go(viewState);
  };

}]);
