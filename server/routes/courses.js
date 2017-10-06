const Sequelize = require('sequelize');
const sequelize = require('../../db/sql/index.js');
const Course = require('../../db/sql/models/Course.js');
const User = require('../../db/sql/models/User.js');
const UserToCourse = require('../../db/sql/models/UserToCourse.js');

const courses = {
  post: (req, res) => {
    User.findById(req.session.passport.user)
      .then(user => {
        Course.findOne({ where: { name: req.params.courseName } })
          .then(course => {
            if (!course) {
              throw new Error();
            } else {
              return user.addCourse(course, {through: { status: '0%' } });
            }
          })
          .then(() => {
            res.redirect(`/users/api/${user.name}`);
          })
          .catch(err => {
            console.error('Error adding user/course relationship to database', err);
          })
      })
      .catch(err => {
        console.error('Error adding user/course relationship to database', err);
      });
  },
  delete: (req, res) => {

  }
};

module.exports = courses;
