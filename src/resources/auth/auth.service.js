import AuthRepository from './auth.repository.js';
import jwt from 'jsonwebtoken';
import config from '../../common/config.js'
import bcrypt from 'bcrypt'

const expiresIn = 60 * 60 * 24

class AuthService {
  static async signUp(dto) {
    let token;
    let createdUser;
    const newUser = {
      full_name: dto.full_name,
      username: dto.username,
      passwordHash: bcrypt.hashSync(dto.password, 10),
      email: dto.email,
    };
    try {
      createdUser = await AuthRepository.signUp(newUser);
      token = jwt.sign({id: createdUser.id}, config.SECRET, {expiresIn});
    } catch (e) {
      return e;
    }
    return {user: createdUser, sessionToken: token};
  }

  static async signIn(dto) {
    let user;
    try {
      user = await AuthRepository.signIn(dto.username);
      console.log(user);
    } catch (e) {
      return; //@TODO implement error
    }
    const match = await bcrypt.compare(dto.password, user.passwordHash);
    console.log(match);
    if (!match) {
      return 'Wrong password'; //@TODO implement error WRONG PASSWORD
    }
    let token = jwt.sign({id: user.id}, config.SECRET, {expiresIn});
    return {
      user: {
        id: user.id,
        username: user.username,
        full_name: user.full_name,
        email: user.email,
      },
      message: 'Successfully authenticated.',
      sessionToken: token,
    };
  }
}

export default AuthService;
