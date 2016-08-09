const models = require('../server/models');
const data = require('../server/db/dummyData');

const User = models.User;
const SingleTrack = models.SingleTrack;
const OverlayTrack = models.OverlayTrack;
const Instrument = models.Instrument;

// TODO: refactor this mess!
const bulkCreate = function(force) {
  return createUsers(force, data.users)
    .then(function() {
      createInstruments(force, data.instruments)
      .then(function() {
        createOverlayTracks(force, data.overlayTracks)
        .then(function() {
          createSingleTracks(force, data.singleTracks)
        });
      })
    })
};

const createUsers = function(force, inputData) {
  return User.sync({ force: force })
    .then(function() {
      User.bulkCreate(inputData)
        .then(function() {
          console.log('Created users:');
          console.log(inputData);
        })
    });
};

const createInstruments = function(force, inputData) {
  return Instrument.sync({ force: force })
    .then(function() {
      Instrument.bulkCreate(inputData)
        .then(function() {
          console.log('Created instruments:');
          console.log(inputData);
        })
    });
};

const createOverlayTracks = function(force, inputData) {
  return OverlayTrack.sync({force: force })
    .then(function() {
      OverlayTrack.bulkCreate(inputData)
        .then(function() {
          console.log('Created overlay tracks:');
          console.log(inputData);
        });
    });
};

const createSingleTracks = function(force, inputData) {
  return SingleTrack.sync({ force: force })
    .then(function() {
      SingleTrack.bulkCreate(inputData)
        .then(function() {
          console.log('Created single tracks:');
          console.log(inputData);
        });
    });
};

var force = process.argv[2] || false;
bulkCreate(force);
