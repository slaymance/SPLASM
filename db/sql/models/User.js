const Sequelize = require('sequelize');
const sequelize = require('../index.js');

const User = sequelize.define('user', {
  name: {
    type: Sequelize.STRING,
    unique: true
  },
  hash: Sequelize.STRING
});

User.sync();

module.exports = User;
