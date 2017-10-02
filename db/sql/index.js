const Sequelize = require('sequelize');
const sequelize = new Sequelize('splasm', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false
});

sequelize.authenticate()
  .then(() => {
    console.log('Successfully connected to mysql database');
  })
  .catch((err) => {
    console.error('Error connecting to mysql database', err);
  });

module.exports = sequelize;

const Course = require('./models/Course.js');
const Session = require('./models/Session.js');
