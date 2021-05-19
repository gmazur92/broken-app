import GameService from './game.service.js';

class GameController {
  static async getAll(req, res) {
    const games = await GameService.getAll(req.user.id);
    if (!games.length) {
      return res.status(500).json({
        message: 'Data not found',
      });
    }
    return res.status(200).json({
      games: games,
      message: 'Data fetched.',
    });
  };

  static async get(req, res) {
    const id = req.params.id;
    const dto = {id, owner_id: req.user.id};
    const game = await GameService.get(dto);
    if (!game) {
      return res.status(500).json({
        message: 'game not found',
      });
    }
    return res.status(200).json({
      games: game,
      message: 'Data fetched.',
    });
  };

  static async create(req, res) {
    const dto = req.body;
    if (!dto) {
      return res.status(500).json({
        message: 'no data to create a new game',
      });
    }
    dto.owner_id = req.user.id;
    const game = await GameService.create(dto);
    if (!game) {
      return res.status(500).json({
        message: 'game was not created',
      });
    }
    res.json(game);
  };

  static async update(req, res) {
    const dto = req.body;
    const gameId = req.params.id
    const ownerId = req.user.id
    if (!dto) {
      return res.status(500).json({
        message: 'no data to update a game',
      });
    }
    const game = await GameService.update(gameId, ownerId, dto);
    if (!game) {
      res.status(500).json({
        message: 'Unable to update'
      })
    }
    res.json(game);
  };

  static async delete(req, res) {
    const gameId = req.params.id
    const ownerId = req.user.id
    const deletedGame = await GameService.delete(gameId, ownerId);
    if (!deletedGame) {
      return res.status(500).json({message: 'game was not deleted'});
    }
    res.json({message: 'Successfully deleted'});
  };
}

export default GameController;
