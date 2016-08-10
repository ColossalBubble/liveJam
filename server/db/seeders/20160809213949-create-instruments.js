'use strict';

const dummyData = require('../dummyData');

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Instruments', dummyData.instruments, {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Instruments', null, {});
  }
};
