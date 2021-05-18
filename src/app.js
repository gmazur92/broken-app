import express from 'express';
import bodyParser from 'body-parser';
import router from './router/index.js';
import db from './db.js'
import config from './common/config.js';

const app = express();

app.use(bodyParser.json());

app.use('/api', router);

const start = async() => {
  try {
    await db.connect()
    app.listen(config.PORT, () => console.log('App is listening on 4000'));
  } catch (e) {
    console.log(e);
  }
};
start();
