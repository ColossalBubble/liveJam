'use strict';

const dummyData = require('../dummyData');

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('OverlayTracks', dummyData.overlayTracks, {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('OverlayTracks', null, {});
  }
};
