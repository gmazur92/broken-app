import AuthRepository from './auth.repository.js';
import jwt from 'jsonwebtoken';
import config from '../../common/config.js';
import bcrypt from 'bcryptjs';

const expiresIn = 60 * 60 * 24;

class AuthService {
  static async signUp(dto) {
    const newUser = {
      full_name: dto.full_name,
      username: dto.username,
      passwordHash: bcrypt.hashSync(dto.password, 10),
      email: dto.email,
    };
    const createdUser = await AuthRepository.signUp(newUser);
    const token = jwt.sign({id: createdUser.id}, config.SECRET, {expiresIn});
    return {user: createdUser, sessionToken: token};
  }

  static async signIn(dto) {
    const user = await AuthRepository.signIn(dto.username);
    const match = await bcrypt.compare(dto.password, user.passwordHash);
    if (!match) {
      throw new Error();
    }
    const token = jwt.sign({id: user.id}, config.SECRET, {expiresIn});
    return {user, sessionToken: token};
  }
}

export default AuthService;
