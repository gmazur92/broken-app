import GameRepository from './game.repository.js';

class GameService {
  static async getAll(id) {
    const games = await GameRepository.getAll(id);
    if (!games.length) {
      throw new Error('No data');
    }
    return games;
  }

  static async get(dto) {
    const game = await GameRepository.get(dto);
    if (!game) {
      throw new Error('No data');
    }
    return game;
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
