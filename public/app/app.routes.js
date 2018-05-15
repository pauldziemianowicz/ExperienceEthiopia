app.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: "views/home.html",
    }).state('our_story', {
      url: '/our-story',
      templateUrl: "views/our_story.html",
    }).state('our_guides', {
      url: '/our-guides',
      templateUrl: "views/our_guides.html",
    }).state('what_makes_us_different', {
      url: '/what-makes-us-different',
      templateUrl: "views/what_makes_us_different.html",
    }).state('three_day_hiking_tour', {
      url: '/three-day-hiking-tour',
      templateUrl: "views/three_day_hiking_tour.html",
    }).state('photo_gallery', {
      url: '/photo-gallery',
      templateUrl: "views/photo_gallery.html",
    });

});
