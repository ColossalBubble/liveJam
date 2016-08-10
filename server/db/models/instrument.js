'use strict';
module.exports = function(sequelize, DataTypes) {
  var Instrument = sequelize.define('Instrument', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Instrument;
};