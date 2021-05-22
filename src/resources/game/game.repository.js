import Game from './game.model.js';

class GameRepository {
  static async getAll(id) {
    return await Game.findAll({where: {owner_id: id}});
  }

  static async get(dto) {
    return await Game.findOne({where: {id: dto.id, owner_id: dto.owner_id}});
  }

  static async create(dto) {
    return await Game.create(dto);
  }

  static async update(id, ownerId, dto) {
    const updatedGame = await Game.update(dto, {returning: true, plain: true, where: {id: id, owner_id: ownerId}});
    return updatedGame[ 1 ];
  }

  static async delete(id, ownerId) {
    return await Game.destroy({where: {id: id, owner_id: ownerId}});
  }
}

export default GameRepository;
