var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
  function(username, password, done) {
    console.log('Passport');
    return done(null, {id: 123, username: 'shane'});
  }
));

const login = {
  post: passport.authenticate('local', {
    successRedirect: '/',
  	failureRedirect: '/login',
  })
};


module.exports = login;
