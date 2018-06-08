app.factory('Services', ['$http', function($http) {

  var Services = {

    submitBookingRequest: function(bookingForm) {
      return new Promise(function(resolve, reject) {
        $http({
          method: 'post',
          url: '/routes/submit-booking-request',
          data: { bookingForm: bookingForm }
        }).then(function(data) {
          resolve(data);
        }).catch(function(error) {
          reject(error)
        })
      })
    },

  };

  return Services;

}])
