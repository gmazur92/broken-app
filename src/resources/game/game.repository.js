import Game from './game.model.js';

class GameRepository {
  static async getAll(id) {
    return await Game.findAll({where: {owner_id: id}});
  }

  static async get(dto) {
    return await Game.findOne({where: {dto}});
  }
}

export default GameRepository;
