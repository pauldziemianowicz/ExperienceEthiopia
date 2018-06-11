var express = require('express');
var router = express.Router();
var path = require('path');

var mailgun = require('mailgun-js')({apiKey: process.env.MAILGUN_API_KEY, domain: process.env.MAILGUN_DOMAIN});
var database = require('../database/database');


router.post('/submit-booking-request', function(req, res, next) {

  var dateMS = Date.now();
  function convertTimeStampToReadable(timeStamp) {
    var newDate = new Date();
    newDate.setTime(timeStamp + (-7 * 3600 * 1000));
    return newDate.toUTCString().replace(/GMT$/,"MST");
  };

  var bookingForm = req.body.bookingForm;
  var dateMS = Date.now();
  bookingForm.dateTime = { ms: dateMS, readable: convertTimeStampToReadable(dateMS) };

  database.mongoDBConnect(database.databaseInfo)
  .then(function(db) {
    console.log('db string:', db);
    database.storeBookingRequest(db, bookingForm)
    .then(function(result) {
      if (result.ok === 1) {
        console.log('booking request successfully stored');
      };

      function formatAndSendNotificationEmails() {
        var EEmessageBlock = '';
        var userMessageBlock = '';

        for (var key in bookingForm) {
          if (key === 'firstName') {
            EEmessageBlock += '<p>\u2022 <span style="font-weight: 600">First Name:</span> ' + bookingForm.firstName + '.</p>\n';
            userMessageBlock += '<p>\u2022 <span style="font-weight: 600">First Name:</span> ' + bookingForm.firstName + '.</p>\n';
          } else if (key === 'lastName') {
            EEmessageBlock += '<p>\u2022 <span style="font-weight: 600">Last Name:</span> ' + bookingForm.lastName + '.</p>\n';
            userMessageBlock += '<p>\u2022 <span style="font-weight: 600">Last Name:</span> ' + bookingForm.lastName + '.</p>\n';
          } else if (key === 'emailAddress') {
            EEmessageBlock += '<p>\u2022 <span style="font-weight: 600">Email Address:</span> ' + bookingForm.emailAddress + '.</p>\n';
            userMessageBlock += '<p>\u2022 <span style="font-weight: 600">Email Address:</span> ' + bookingForm.emailAddress + '.</p>\n';
          } else if (key === 'tourPackage') {
            EEmessageBlock += '<p>\u2022 <span style="font-weight: 600">Tour Package:</span> ' + bookingForm.tourPackage + '.</p>\n';
            userMessageBlock += '<p>\u2022 <span style="font-weight: 600">Tour Package:</span> ' + bookingForm.tourPackage + '.</p>\n';
          } else if (key === 'requestedDate1') {
            EEmessageBlock += '<p>\u2022 <span style="font-weight: 600">Requested Date 1:</span> ' + convertTimeStampToReadable(Date.parse(bookingForm.requestedDate1)) + '.</p>\n';
            userMessageBlock += '<p>\u2022 <span style="font-weight: 600">Requested Date 1:</span> ' + convertTimeStampToReadable(Date.parse(bookingForm.requestedDate1)) + '.</p>\n';
          } else if (key === 'requestedDate2' && bookingForm[key] !== '') {
            EEmessageBlock += '<p>\u2022 <span style="font-weight: 600">Requested Date 2:</span> ' + convertTimeStampToReadable(Date.parse(bookingForm.requestedDate2)) + '.</p>\n';
            userMessageBlock += '<p>\u2022 <span style="font-weight: 600">Requested Date 2:</span> ' + convertTimeStampToReadable(Date.parse(bookingForm.requestedDate2)) + '.</p>\n';
          } else if (key === 'requestedDate3' && bookingForm[key] !== '') {
            EEmessageBlock += '<p>\u2022 <span style="font-weight: 600">Requested Date 3:</span> ' + convertTimeStampToReadable(Date.parse(bookingForm.requestedDate3)) + '.</p>\n';
            userMessageBlock += '<p>\u2022 <span style="font-weight: 600">Requested Date 3:</span> ' + convertTimeStampToReadable(Date.parse(bookingForm.requestedDate3)) + '.</p>\n';
          } else if (key === 'additionalInformation' && bookingForm[key] !== '') {
            EEmessageBlock += '<p>\u2022 <span style="font-weight: 600">Additional Information:</span> ' + bookingForm.additionalInformation + '.</p>\n';
            userMessageBlock += '<p>\u2022 <span style="font-weight: 600">Additional Information:</span> ' + bookingForm.additionalInformation + '.</p>\n';
          };
        };

        var messageToEEData = {
          from: '<info@experience-ethiopia.com>',
          to: 'info@experience-ethiopia.com',
          subject: 'New Booking Request!',
          html: "<h4>A new booking request has been submitted at " + bookingForm.dateTime.readable + " :</h4>\n" + EEmessageBlock,
        };

        mailgun.messages().send(messageToEEData, function(err, result) {
          if (err) {
            console.log('messageToEEData Error:', err);
          } else {
            console.log('messageToEEData send result:', result);
          };
        });

        var messageToUserData = {
          from: '<info@experience-ethiopia.com>',
          to: bookingForm.emailAddress,
          subject: 'Experience Ethiopia Booking Request Confirmation',
          html: "<h4>" + bookingForm.firstName + ", this is a confirmation of your booking request on experience-ethiopia.com. Thank you for submitting your request. We will be in touch with you soon!\n"
          + userMessageBlock
        };

        mailgun.messages().send(messageToUserData, function(err, result) {
          if (err) {
            console.log('messageToUserData Error:', err);
          } else {
            console.log('messageToUserData send result:', result);
          };
        });

      };
      formatAndSendNotificationEmails();

    }).catch(function(err) {
      console.log(err);
    });
  }).catch(function(err) {
    console.log(err);
  });


});


module.exports = router;
