app.controller('BookingController', ['$window', '$scope', '$state', '$rootScope', 'localStorageService', 'Services', function($window, $scope, $state, $rootScope, localStorageService, Services) {

  $scope.view = {};
  $scope.data = {};
  $scope.bookingForm = {
    firstName: '',
    lastName: '',
    emailAddress: '',
    tourPackage: '',
    partySize: 0,
    requestedDate1: '',
    requestedDate2: '',
    requestedDate3: '',
    additionalInformation: '',
  };

  $(window).on('click', function(event) {
    var className = event.target.className;
    if (className === 'booking-window-background' || className === 'close-booking-window' || className === 'cancel-booking form-control') {
      $rootScope.displayBookingWindow = false;
    };
    $scope.$apply();
  });

  function validateEmailAddress(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  $scope.bookingForm.submit = function() {
    console.log($scope.bookingForm);
    // first validation layer
    if ($scope.bookingForm.firstName === '') {
      alert('First Name is required');
    } else if ($scope.bookingForm.lastName === '') {
      alert('Last Name is required');
    } else if ($scope.bookingForm.emailAddress === '') {
      alert('Email Address is required');
    } else if ($scope.bookingForm.tourPackage === '') {
      alert('Tour Package selection is required');
    } else if ($scope.bookingForm.partySize === 0) {
      alert('Party Size is required');
    } else if ($scope.bookingForm.requestedDate1 === '' || $scope.bookingForm.requestedDate1 === undefined) {
      alert('Requested Date #1 preference is required')
    };

    // second validation layer
    if (!validateEmailAddress($scope.bookingForm.emailAddress)) {
      alert('Please enter a valid email address')
    };

    Services.submitBookingRequest($scope.bookingForm)
    .then(function() {

    }).catch(function(err) {
      console.log(err);
    });


  };

}]);
