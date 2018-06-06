app.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: "views/home.html",
    }).state('simien_mountains', {
      url: '/simien-mountains',
      templateUrl: "views/simien_mountains.html",
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
    }).state('important_information_and_tips', {
      url: '/important-information-and-tips',
      templateUrl: "views/important_information_and_tips.html",
    }).state('photo_gallery', {
      url: '/photo-gallery',
      templateUrl: "views/photo_gallery.html",
    }).state('contact_us', {
      url: '/contact-us',
      templateUrl: "views/contact_us.html",
    });

});
