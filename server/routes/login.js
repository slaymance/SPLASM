var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
  function(username, password, done) {
    console.log('Passport');
    return done(null, {blah: 'some string'});
  }
));

const login = {
  post: passport.authenticate('local', {
    successRedirect: '/',
  	failureRedirect: '/login',
    session: false
  })
};


module.exports = login;
