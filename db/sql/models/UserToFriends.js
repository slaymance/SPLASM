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

UserToFriends.sync();
