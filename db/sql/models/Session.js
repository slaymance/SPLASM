const Sequelize = require('sequelize');
const sequelize = require('./../index.js');

const Session = sequelize.define('course', {
  
});

Session.sync();
