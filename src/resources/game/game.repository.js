import Game from './game.model.js';

class GameRepository {
  static async getAll(id) {
    try {
      return await Game.findAll({where: {owner_id: id}});
    } catch (e) {
      return e.message;
    }
  }

  static async get(dto) {
    try {
      return await Game.findOne({where: {id: dto.id, owner_id: dto.owner_id}});
    } catch (e) {
      return e.message;
    }
  }

  static async create(dto) {
    return await Game.create(dto);
  }

  static async update(id, ownerId, dto) {
    try {
      const updatedGame = await Game.update(dto, {returning: true, plain: true, where: {id: id, owner_id: ownerId}});
      return updatedGame[ 1 ];
    } catch (e) {
      return e.message;
    }
  }

  static async delete(id, ownerId) {
    try {
      return await Game.destroy({where: {id: id, owner_id: ownerId}});
    } catch (e) {
      return e.message;
    }
  }
}

export default GameRepository;
