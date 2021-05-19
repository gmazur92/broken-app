import GameRepository from './game.repository.js';

class GameService {
  static async getAll(id) {
    return await GameRepository.getAll(id);
  }
  static async get(dto) {
    return await GameRepository.get(dto);
  }
}

export default GameService;
