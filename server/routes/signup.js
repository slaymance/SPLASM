const path = require('path');
const User = require('../../db/sql/models/User.js');

const signup = {
  post: (req, res) => {
  	// check if the user already exists before creating new user
  	User.findOne({
  		where: {name: req.body.username}
  	}).then((existingUser) => {
  		if (!existingUser) {
		    User.create({
		      name: req.body.username,
		      hash: req.body.password
		    })
		      .then(console.log('User successfully signed up'))
		      .catch(err => {});
		    res.redirect('/');
  		} else {
  			console.log('Username already exists. Please choose another.');
  		}
  	}).catch(err => {
  		console.error(err);
  	});
  },
  get: (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../client/index.html'));
  }
};

module.exports = signup;
