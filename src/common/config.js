import dotenv from 'dotenv'
import path from 'path';

const __dirname = path.resolve();

dotenv.config({
  path: path.join(__dirname, '.env'),
});

export default {
  DB_NAME: process.env.DB_NAME,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_HOST: process.env.DB_HOST,
  DB_PORT: process.env.DB_PORT,
  DB_USER: process.env.DB_USER,
  PORT: process.env.PORT,
  SECRET: process.env.SECRET_KEY,
};
