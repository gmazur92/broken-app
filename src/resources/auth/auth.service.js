import jwt from 'jsonwebtoken';
import config from '../../common/config.js';
import bcrypt from 'bcryptjs';
import UserService from '../user/user.service.js';

class AuthService {

  static generateToken(user) {
    const expiresIn = 60 * 60 * 24;
    return jwt.sign({id: user.id}, config.SECRET, {expiresIn});
  }

  static async signUp(dto) {
    const newUser = {
      fullName: dto.fullName,
      username: dto.username,
      password: bcrypt.hashSync(dto.password, 10),
      email: dto.email,
    };
    const user = await UserService.create(newUser);
    const token = this.generateToken(user)
    return {user, sessionToken: token};
  }

  static async signIn(dto) {
    const user = await UserService.getByUsername(dto.username);
    const match = await bcrypt.compare(dto.password, user.password);
    if (!match) {
      throw new Error();
    }
    const token = this.generateToken(user)
    return {user, sessionToken: token};
  }
}

export default AuthService;
