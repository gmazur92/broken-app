import { sequelize } from '../../db.js';
import DataTypes from 'sequelize';

const Game = sequelize.define('game', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },

  title: {
    type: DataTypes.STRING(25),
    allowNull: false,
    notEmpty: true,
  },

  ownerId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  studio: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  esrbRating: {
    type: DataTypes.CHAR(5),
    allowNull: false,
  },

  userRating: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1,
      max: 5,
    },
  },

  havePlayed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
});

export default Game;
