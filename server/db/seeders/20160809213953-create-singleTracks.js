'use strict';

const dummyData = require('../dummyData');

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('SingleTracks', dummyData.singleTracks, {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('SingleTracks', null, {});
  }
};
