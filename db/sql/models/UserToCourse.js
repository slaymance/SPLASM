const Sequelize = require('sequelize');
const sequelize = require('../index.js');
const User = require('./User.js');
const Course = require('./Course.js');

const UserToCourse = sequelize.define('usertocourse', {
  user_id: {
    type: Sequelize.INTEGER,
    references: {
      model: User,
      key: 'id'
    }
  },
  course_id: {
    type: Sequelize.INTEGER,
    references: {
      model: Course,
      key: 'id'
    }
  }
});

UserToCourse.sync();
