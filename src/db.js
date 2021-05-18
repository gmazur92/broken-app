import { Sequelize } from 'sequelize';
import config from './common/config.js';

const sequelize = new Sequelize(
  config.DB_NAME, config.DB_USER, config.DB_PASSWORD, {
    dialect: 'postgres',
    host: config.DB_HOST,
    port: config.DB_PORT,
    operatorsAliases: false,
  },
);

const connect = async() => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log('Connection to the database has been established successfully.');
  } catch (error) {
    console.error(error.message);
    process.exit(-1);
  }
};

export {
  sequelize,
  connect,
};
