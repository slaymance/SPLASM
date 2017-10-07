const Sequelize = require('sequelize');
const sequelize = require('../index.js');
const User = require('./User.js');

const UserToFriend = sequelize.define('usertofriends', {});

User.belongsToMany(User, {as: 'friend', through: UserToFriend});

UserToFriend.sync()
  .then(() => {
    console.log('successfully created user to friend table');
  })
  .catch((err) => {
    console.log('error creating user to friend table', err);
  });

module.exports = UserToFriend;
