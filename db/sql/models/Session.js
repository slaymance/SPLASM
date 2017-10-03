const Sequelize = require('sequelize');
const sequelize = require('../index.js');

const Session = sequelize.define('session', {

});

Session.sync();
