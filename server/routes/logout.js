const passport = require('passport');

const logout = {
  get: (req, res) => {
  	req.logout();
  	res.redirect('/login');
  }
};

module.exports = logout;