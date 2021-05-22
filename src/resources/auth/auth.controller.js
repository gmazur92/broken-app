import AuthService from './auth.service.js';
import deletePropsFromObj from '../../utils/deletePropsFromObj.js';
import { excludeFromUserResponse } from '../../common/responseExcludeConstants.js';

class AuthController {
  static async signUp(req, res) {
    const userDto = req.body;
    try {
      const createdUser = await AuthService.signUp(userDto);
      const {user, sessionToken} = createdUser
      const userToResponse = deletePropsFromObj(user, excludeFromUserResponse)
      res.status(201).json({
        user: userToResponse,
        sessionToken,
        message: 'Successfully registered.',
      });
    } catch (e) {
      res.status(500).send({message: 'User with same data already exist in database'});
    }
  }

  static async signIn(req, res) {
    const userDto = req.body;
    try {
      const response = await AuthService.signIn(userDto);
      const {user, sessionToken} = response
      const userToResponse = deletePropsFromObj(user, excludeFromUserResponse)
      res.json({
        user: userToResponse,
        sessionToken,
        message: 'Successfully authenticated.',
      });
    } catch (e) {
      res.status(401).json({message: 'Incorrect username or password.'});
    }
  }
}

export default AuthController;
