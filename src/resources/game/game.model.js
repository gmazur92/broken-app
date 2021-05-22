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

  owner_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  studio: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  esrb_rating: {
    type: DataTypes.CHAR(5),
    allowNull: false,
  },

  user_rating: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1,
      max: 5,
    },
  },

  have_played: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
});

export default Game;
