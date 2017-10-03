const express = require('express');
const app = express();
const router = require('./router.js');
const db = require('../db/mongo/index.js');
// const request = require('request');
const sequelize = require('../db/sql/index.js');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/../client'));
app.use('/', router);

app.get('/', (req, res) => res.send());

app.listen(port, () => console.log(`App listening on port ${port}`));
