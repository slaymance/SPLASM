const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../../db/sql/models/User.js');

passport.use(new LocalStrategy(
  function(username, password, done) {
    // User.findOne({
    //   where: {username: username}
    // }).then((err, userObj) => {
    //   // userObj is the first item in the users table with a matching username
    //   // handle error if necessary
    //   if (err) {
    //     return done(err);
    //   }
    //   // if the user does not exist
    //   if (!userObj) {
    //     return done(null, false, {message: 'Incorrect username.'});
    //   }
    //   // if the password does not match
    //   if (!userObj.validPassword(hash)) {
    //     return done(null, false, {message: 'Incorrect password.'});
    //   }
    //   // else the username and password are valid
    //   return done(null, userObj);
    // });

    User.findOne({
      where: {name: username}
    }).then(user => {
      console.log('user: ', JSON.parse(JSON.stringify(user)));
      return done(null, {user: 'testing'});
    })
    // return done(null, {user: 'testing'});
  }
));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

const login = {
  post: passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
  })
};


module.exports = login;
