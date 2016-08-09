var db = require('../db');

/* Model definitions */
var User = db.define('user', {
  email: {
    type: db.Sequelize.STRING
  },
  username: {
    type: db.Sequelize.STRING
  },
  hashedPassword: {
    type: db.Sequelize.STRING
  },
  password: {
    type: db.Sequelize.VIRTUAL,
    set: function (val) {
      // Remember to set the data value, otherwise it won't be validated
      this.setDataValue('password', val);
      this.setDataValue('password_hash', this.salt + val);
    },
    validate: {
      isLongEnough: function (val) {
        if (val.length < 7) {
          throw new Error("Please choose a longer password")
        }
      }
    }
  }
});

var SingleTrack = db.define('singleTrack', {
  url: {
    type: db.Sequelize.STRING
  }
});

var OverlayTrack = db.define('overlayTrack', {
  url: {
    type: db.Sequelize.STRING
  }
});

var Instrument = db.define('instrument', {
  name: {
    type: db.Sequelize.STRING
  }
});

/* Associations */
User.hasMany(SingleTrack);
SingleTrack.belongsTo(User);
SingleTrack.belongsTo(OverlayTrack);
SingleTrack.belongsTo(Instrument);

module.exports = {
  User: User,
  SingleTrack: SingleTrack,
  OverlayTrack: OverlayTrack,
  Instrument: Instrument
};
