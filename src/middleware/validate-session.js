import jwt from 'jsonwebtoken';
import config from '../common/config.js';

const validateSession = async(req, res, next) => {
  if (req.method === 'OPTIONS') {
    next();   // allowing options as a method for request
    return;
  }
  try {
    const sessionToken = req.headers.authorization.split(' ')[ 1 ]; //get only token without Bearer
    if (!sessionToken) {
      return res.status(401).json({auth: false, message: 'No token provided.'});
    }
    req.user = jwt.verify(sessionToken, config.SECRET);
    next();
  } catch (e) {
    return res.status(401).json({error: 'Token expired'});
  }
};

export default validateSession;
