const User = require('../../db/sql/models/User.js');

const signup = {
  post: (req, res) => {
    User.create({
      name: req.body.username,
      hash: req.body.password
    })
      .then(console.log('User successfully signed up'))
      .catch(err => {});
    res.redirect('/');
  }
};

module.exports = signup;
