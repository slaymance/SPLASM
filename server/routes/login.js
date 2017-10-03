const passport = require('passport');

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
