import User from './user.model.js';

class AuthRepository {
  static async signUp(user) {
    return await User.create(user);
  }

  static async signIn(username) {
    const user = await User.findOne({where: {username}});
    return user.dataValues;
  }
}

export default AuthRepository;
