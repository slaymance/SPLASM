var login = {
  post: passport.authenticate('local'),
  function(req, res) {
  	// this function gets called if authentication is successful
  	// `req.user` contains the authenticated user

  	// the user should be redirected to their personal profile
  	// something like '/users/' + req.user.username
  	// for now this just redirects to the main index.html page
  	res.redirect('/')
  }
};

module.exports = login;