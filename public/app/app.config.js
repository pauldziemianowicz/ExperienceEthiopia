app.config(['$locationProvider', '$httpProvider', 'localStorageServiceProvider', function($locationProvider, $httpProvider, localStorageServiceProvider) {

  localStorageServiceProvider
  .setPrefix('eat-site');

  $locationProvider.html5Mode(true);

}])
