var mongodb = require('mongodb');
var assert = require('assert');
var bPromise = require('bluebird');
var _ = require('lodash');

function convertTimeStampToReadable(timeStamp) {
  var newDate = new Date();
  newDate.setTime(timeStamp + (-7 * 3600 * 1000));
  return newDate.toUTCString().replace(/GMT$/,"MST");
};

var database = {

  // Indigo Dashboards Connection URI
  databaseInfo: {
    connectionURI: process.env.MONGODB_EXPERIENCE_ETHIOPIA_URI,
    name: 'experience-ethiopia'
  },

  // Establish connection to Mongo Database
  mongoDBConnect: function(database, sequenceInfo) {
    return new Promise(function(resolve,reject) {
      // if sequenceInfo === 'login sequence', Login Sequence Step #1
      mongodb.MongoClient.connect(database.connectionURI, {connectTimeoutMS: 60000, socketTimeoutMS: 60000}, function(err, db) {
        if (err) {
          // Error
          console.log(err);
        } else {
          resolve({
            message: "Connected successfully to " + database.name + " mLabs MongoDB server",
            db: db
          })
        }
      });
    })
  },

  // Disconnect from Database
  mongoDBDisconnect: function(db) {
    db.close();
    console.log('disconnected from ' + db.databaseName);
  },

  // Access collection
  accessCollection: function(db, targetCollectionName) {
    return new Promise(function(resolve, reject) {

      db.collection(targetCollectionName, {strict: true}, function(err, collection) {
        if (err) {
          if (err.message === 'Collection ' + targetCollectionName + ' does not exist. Currently in strict mode.') {
            db.createCollection(targetCollectionName, function(err, collection) {
              if (collection) resolve(targetCollectionName);
            })
          } else {
            console.log('unidentified error - no collection created. check logs');
            reject();
          }
        } else if (collection) {
          resolve(collection);
        }
      });
    })
  },

  storeBookingRequest: function(db, bookingForm) {
    return new Promise(function(resolve, reject) {
      database.accessCollection(db.db, 'booking-requests')
      .then(function(collection) {
        var dateMS = Date.now();
        bookingForm.dateTime = { ms: dateMS, readable: convertTimeStampToReadable(dateMS) };
        collection.insertOne(bookingForm, function(err, result) {
          if (err) {
            console.log(err);
          } else {
            resolve(result)
          }
        });
      }).catch(function(err) {
        console.log(err);
      });
    });
  },

}

module.exports = database;
