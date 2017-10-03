const Sequelize = require('sequelize');
const sequelize = require('../index.js');
const request = require('request');

const Course = sequelize.define('course', {
  name: {
    type: Sequelize.STRING,
    unique: true
  },
  parent: Sequelize.STRING,
  url: Sequelize.STRING
});

Course.sync()
  .then(() => {
    request.get('http://www.khanacademy.org/api/v1/topic/computing', (err, res, body) => {
      if (err) { throw err; }

      let parsedBody = JSON.parse(body);
      parsedBody.children.forEach((child) => {
        request.get(`http://www.khanacademy.org/api/v1/topic/${child.id}`, (err, res, body) => {
          if (err) { throw err; }

          let parsedChild = JSON.parse(body);
          parsedChild.children.forEach((course) => {
            Course.create({
              name: course.translated_title,
              parent: parsedChild.translated_title,
              url: course.url
            }).then(() => console.log('added course to db'))
            .catch(err => console.log('duplicate entry'));
          });
        });
      });
    });
  })
  .catch(err => {
    console.log('Error with mysql Course table');
  });



module.exports = Course;
