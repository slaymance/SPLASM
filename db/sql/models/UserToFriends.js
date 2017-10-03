const Sequelize = require('sequelize');
const sequelize = require('../index.js');
const User = require('./User.js');

const UserToFriends = sequelize.define('usertofriends', {
  user_id: {
    type: Sequelize.INTEGER,
    references: {
      model: User,
      key: 'id'
    }
  },
  friend_id: {
    type: Sequelize.INTEGER,
    references: {
      model: User,
      key: 'id'
    }
  }
});

UserToFriends.sync()
  .then(() => {
    console.log('successfully created user to course table');
  })
  .catch((err) => {
    console.log('error creating user to course table', err);
  });

module.exports = UserToFriends;
