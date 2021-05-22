import jwt from 'jsonwebtoken';
import User from '../resources/auth/user.model.js';
import config from '../common/config.js';

const validateSession = async(req, res, next) => {
  const sessionToken = req.headers.authorization;
  let decoded;

  if (req.method === 'OPTIONS') {
    next();   // allowing options as a method for request
    return;
  }
  if (!sessionToken) {
    return res.status(401).send({auth: false, message: 'No token provided.'});
  }

  try {
    decoded = jwt.verify(sessionToken, config.SECRET);
  } catch (err) {
    return res.status(401).send({error: 'Token expired'});
  }

  const user = await User.findOne({where: {id: decoded.id}});
  if (!user) {
    res.status(401).send({error: 'not authorized'});
  }
  req.user = {
    id: user.dataValues.id,
    full_name: user.dataValues.full_name,
    email: user.dataValues.email,
    username: user.dataValues.username,
  };
  next();
};

export default validateSession;
