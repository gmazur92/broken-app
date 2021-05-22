import User from './user.model.js';

class AuthRepository {
  static async signUp(user) {
    const createdUser = await User.create(user);
    return createdUser.dataValues;
  }

  static async signIn(username) {
    const user = await User.findOne({where: {username}});
    return user.dataValues;
  }
}

export default AuthRepository;
