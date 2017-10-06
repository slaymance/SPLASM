const Sequelize = require('sequelize');
const sequelize = require('../../db/sql/index.js');
const User = require('../../db/sql/models/User.js');
const Course = require('../../db/sql/models/Course.js');
const UserToCourse = require('../../db/sql/models/UserToCourse.js');

var users = {
  getUser: (req, res) => {
    User.findAll({
      include: [
        { model: Course },
        { model: User, as: 'friend' }
      ],
      where: {name: req.params.username},
      order: sequelize.col('status') // couldn't figure out how to sort with custom function (sorted manually below)
    })
      .then((result) => {
        result[0].courses = result[0].courses.sort((a, b) => {
          return Number(a.usertocourse.status.slice(0, a.usertocourse.status.length - 1)) - Number(b.usertocourse.status.slice(0, b.usertocourse.status.length - 1));
        });
        res.send((JSON.stringify(result)));
      })
      .catch((err) => {
        console.error('Error finding user', err);
      });
  },
  getAllUsers: (req, res) => {
    User.findAll({
      attributes: ['name']
    })
      .then((result) => {
        res.send((JSON.stringify(result)));
      })
      .catch((err) => {
        console.error('Error finding all users');
      });
  }
};

module.exports = users;
