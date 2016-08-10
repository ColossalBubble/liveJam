'use strict';
module.exports = function(sequelize, DataTypes) {
  var OverlayTrack = sequelize.define('OverlayTrack', {
    url: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return OverlayTrack;
};