const Sequelize = require('sequelize');

var db = {
  name: 'liveJam_development',
  username: 'liveJam',
  password: ''
};

var sequelize = new Sequelize(db.name, db.username, db.password, {
  host: 'localhost',
  dialect: 'mariadb',
});

module.exports = sequelize;
