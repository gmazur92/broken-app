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
    return res.status(403).send({auth: false, message: 'No token provided.'});
  }

  try {
    decoded = jwt.verify(sessionToken, config.SECRET);
  } catch (err) {
    console.log(err);
  }

  const user = await User.findOne({where: {id: decoded.id}});
  if (!user) {
    res.status(401).send({error: 'not authorized'});
  }
  req.user = user.dataValues; //@TODO hm...
  next();
};

export default validateSession;
