import User from './user.model.js';

class UserRepository {
  static async create(user) {
    const createdUser = await User.create(user);
    return createdUser.dataValues;
  }

  static async getByUsername(username) {
    const user = await User.findOne({where: {username}});
    return user.dataValues;
  }

  static async getById(id) {
    const user = await User.findOne({where: {id}});
    return user.dataValues;
  }
}

export default UserRepository;
