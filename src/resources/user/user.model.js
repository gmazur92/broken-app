import { sequelize } from '../../db.js';
import DataTypes from 'sequelize';

const User = sequelize.define('user', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },

  fullName: {
    type: DataTypes.STRING,
    allowNull: false,
    notEmpty: true,
  },

  username: {
    type: DataTypes.STRING,
    allowNull: false,
    notEmpty: true,
    unique: {
      args: 'username',
      msg: 'The username is already taken!'
    }
  },

  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  email: {
    type: DataTypes.STRING,
    allowNull: false,
    notEmpty: true,
    validate: {
      isEmail: true,
    },
    unique: {
      args: 'email',
      msg: 'The email is already taken!'
    }
  },
});

export default User;
