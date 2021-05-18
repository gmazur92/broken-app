import User from './user.model.js';

class AuthRepository {
  static async signUp(dto) {
    const createUser = await User.create(dto);
    if (!createUser) {
      //@TODO if user was not created
    }
    //@TODO check how to return model
    return {
      full_name: createUser.full_name,
      username: createUser.username,
      email: createUser.email,
    };
  }

  static async signIn(username) {
    const user = await User.findOne({where: {username}});
    if (!user) {
      //@TODO implement if no user found
    }
    return user.dataValues
  }
}

export default AuthRepository;
