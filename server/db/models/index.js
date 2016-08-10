'use strict';

var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize');
var basename  = path.basename(module.filename);
var env       = process.env.NODE_ENV || 'development';
var db        = {};

var pathToConfig = path.join(__dirname, 'config.json');
var config       = require(pathToConfig)[env];

if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  var database = config.database;
  var username = config.username;
  var password = config.password;

  var sequelize = new Sequelize(database, username, password, config);
}

/**
 * Returns true if all 3 conditions are true:
 * - has a `.` in front of the name (file is not 'hidden')
 * - not the current file
 * - ends in the `.js` extension
 */
var isModelFile = function(file) {
  return (file.indexOf('.') !== 0) &&
         (file !== basename) &&
         (file.slice(-3) === '.js');
};

var setModelToDb = function(file) {
  var pathToFile = path.join(__dirname, file);
  var model = sequelize['import'](pathToFile);
  db[model.name] = model;
};

// Select model files & save model references to `db` object
fs.readdirSync(__dirname)
  .filter(isModelFile)
  .forEach(setModelToDb);

var models = Object.keys(db);
models.forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
