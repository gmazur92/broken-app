import express from 'express';
import router from './router/index.js';
import { connect } from './db.js';
import config from './common/config.js';

const app = express();

app.use(express.json());

app.use('/api', router);

const start = async() => {
  try {
    await connect();
    app.listen(config.PORT, () => console.log('App is listening on 4000'));
  } catch (e) {
    console.log(e);
  }
};

start();
