'use strict';
module.exports = function(sequelize, DataTypes) {
  var SingleTrack = sequelize.define('SingleTrack', {
    url: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return SingleTrack;
};