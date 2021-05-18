const {Sequelize} = require('sequelize');
require('dotenv').config()

const sequelize = new Sequelize(
  process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    dialect: 'postgres',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
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

const database = {
  sequelize: sequelize,
  connect,
};

module.exports = database;
