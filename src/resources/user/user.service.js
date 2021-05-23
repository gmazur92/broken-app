import UserRepository from './user.repository.js';

class UserService {
  static async create(dto) {
    return await UserRepository.create(dto);
  }

  static async getById(id) {
    return await UserRepository.getById(id);
  }

  static async getByUsername(username) {
    return await UserRepository.getByUsername(username);
  }
}

export default UserService;
