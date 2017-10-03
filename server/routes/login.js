var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
  function(username, password, done) {
  	// verify callback finds a user that possessed a set of credentials
  	User.findOne({username: username}, function(err, user) {
  		// if there is an error with the server
  		if (err) {
  			return done(err);
  		}
      // if the username is incorrect
  		if (!user) {
  			return done(null, false, {message: 'Incorrect username.'});
  		}
  		// if the password in incorrect
  		if (!user.validPassword(password)) {
  			return done(null, false, {message: 'Incorrect password.'});
  		}
      // the credentials are valid; supply passport with authenticated user
  		return done(null, user);
  	});
  }
));

var login = {
	// the first argument specifies the strategy - local
	// the second argument specifies the redirection paths
	// on success we currently redirect to the main page
	// would this change to some user specific url, or would the info just be dynamically updated for a static url?
  post: passport.authenticate('local', {
  	successRedirect: '/',
  	successFlash: 'Welcome!',
  	failureRedirect: '/login',
  	failureFlash: true
  });
};

module.exports = login;
