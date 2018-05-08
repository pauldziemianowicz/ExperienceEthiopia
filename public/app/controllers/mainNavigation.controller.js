app.controller('MainNavigationController', ['$window', '$scope', '$state', '$rootScope', 'localStorageService', function($window, $scope, $state, $rootScope, localStorageService) {

  $scope.view = {};
  $scope.data = {};
  $scope.uploader = {};
  $scope.siteNavigation = {};

  var aWindow = angular.element($window);
  $scope.view.aboutUsDropdownVisible = false;
  $scope.view.hikingToursDropdownVisible = false;
  $scope.view.currentState = $state.current.name;

  $(window).on('mouseover', function(event) {

    // Homepage Navigation Menu Dropdown Visibility Logic
    var className = event.target.className;
    if (className === 'nav-option-text about-us') {
      if (!$scope.view.aboutUsDropdownVisible) {
        $scope.view.aboutUsDropdownVisible = true;
        $scope.view.hikingToursDropdownVisible = false;
      }
    } else if (className === 'nav-option-text hiking-tours') {
      if (!$scope.view.hikingToursDropdownVisible) {
        $scope.view.hikingToursDropdownVisible = true;
        $scope.view.aboutUsDropdownVisible = false;
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
        };
      };
    };

    $scope.$apply();
  });

  $scope.siteNavigation.home = function() {
    $state.go('home');
    $scope.view.currentState = 'home'

  };
  $scope.siteNavigation.ourStory = function() {
    $state.go('our_story');
    $scope.view.currentState = 'our_story';
  };
  $scope.siteNavigation.ourGuides = function() {
    $state.go('our_guides');
    $scope.view.currentState = 'our_guides';
  };
  $scope.siteNavigation.whatMakesUsDifferent = function() {
    $state.go('what_makes_us_different');
    $scope.view.currentState = 'what_makes_us_different';

  };
  $scope.siteNavigation.photoGallery = function() {
    $state.go('photo_gallery');
    $scope.view.currentState = 'photo_gallery';

  };

  // $scope.view.toggleAboutUsDropdown = function(state) {
  //   $scope.view.aboutUsDropdownVisible = state;
  // };
  //
  // $scope.view.toggleHikingToursDropdown = function(state) {
  //   $scope.view.hikingToursDropdownVisible = state;
  // };

  $scope.view.homeLearnMoreNav = function() {

  };

}]);
