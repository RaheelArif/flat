let passport = require("passport")
let Localstrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
let user = require("../db/userModel")
let newStrategy = new Localstrategy({
  usernameField: 'email',
},
  function (username, password, cb) {
    user.findOne({ email: username }, function (err, user) {
      if (user) {
        bcrypt.compare(password, user.password, function (err, res) {
          if (!err && res)
            cb(null, user);
        });
      }
      else {
        cb(null, null);
      }
    });
  }
);

passport.serializeUser(function (user, next) {
  next(null, user._id);
});

passport.deserializeUser(function (id, next) {
  user.findOne({_id:id},(err,user)=>{
      if(!err&&user)
      next(null, user);
  })

});


passport.use(newStrategy);

module.exports = passport;  
