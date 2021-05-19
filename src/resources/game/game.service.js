import GameRepository from './game.repository.js';

class GameService {
  static async getAll(id) {
    return await GameRepository.getAll(id);
  }
  static async get(dto) {
    return await GameRepository.get(dto);
  }
  static async create(dto) {
    return await GameRepository.create(dto);
  }
  static async update(id, ownerId, dto) {
    return await GameRepository.update(id, ownerId, dto);
  }
  static async delete(id, ownerId) {
    return await GameRepository.delete(id, ownerId);
  }
}

export default GameService;
