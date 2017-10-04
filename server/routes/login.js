var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
  function(username, password, done) {
    console.log('Passport');
    return done(null, {id: 1234, username: 'shane'});
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
