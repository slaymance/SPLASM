var express = require('express');
var router = express.Router();
var users = require('./routes/users.js');
var login = require('./routes/login.js');
var signup = require('./routes/signup.js');

router.get('/users/:username', users.get);
router.post('/login', login.post);
router.post('/signup', signup.post);

module.exports = router;
