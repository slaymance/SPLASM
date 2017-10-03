var express = require('express');
var router = express.Router();
var users = require('./routes/users.js');
var login = require('./routes/login.js');

router.get('/users/:username', users.get);
router.post('/login', login.post);

module.exports = router;
