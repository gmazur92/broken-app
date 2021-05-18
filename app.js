var express = require('express');
var user = require('./controllers/usercontroller');
var game = require('./controllers/gamecontroller')
// const sequelize = require('./db.js')
const db = require('./db');

const bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

app.use('/api/auth', user);
app.use(require('./middleware/validate-session'))
app.use('/api/game', game);

const start = async() => {
  try {
    await db.connect()
    app.listen(4000, () => console.log('App is listening on 4000'));
  } catch (e) {
    console.log(e);
  }
};
start();

module.exports = app;
