app.controller('OurStoryController', ['$window', '$scope', '$state', '$rootScope', 'localStorageService', function($window, $scope, $state, $rootScope, localStorageService) {

  $scope.view = {};

  $scope.view.openOurGuidesPage = function() {
    var url = $state.href('our_guides');
    window.open(url, '_blank');
  };

}]);
