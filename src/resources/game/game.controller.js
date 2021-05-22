import GameService from './game.service.js';

class GameController {
  static async getAll(req, res) {
    try {
      const games = await GameService.getAll(req.user.id);
      res.json({
        games,
        message: 'Data fetched.',
      });
    } catch (e) {
      res.status(500).json({
        message: 'Data not found',
      });
    }
  };

  static async get(req, res) {
    const id = req.params.id;
    const dto = {id, owner_id: req.user.id};
    try {
      const game = await GameService.get(dto);
      res.json({
        games: game,
        message: 'Data fetched.',
      });
    } catch (e) {
      res.status(500).json({
        message: 'game not found',
      });
    }
  };

  static async create(req, res) {
    const dto = req.body;
    dto.owner_id = req.user.id;
    if (!dto) {
      res.status(500).json({
        message: 'no data to create a new game',
      });
    }
    try {
      const game = await GameService.create(dto);
      res.json(game);
    } catch (e) {
      res.status(500).json({
        message: 'game was not created',
      });
    }
  };

  static async update(req, res) {
    const dto = req.body;
    const gameId = req.params.id;
    const ownerId = req.user.id;
    if (!dto) {
      res.status(500).json({
        message: 'no data to update a game',
      });
    }
    try {
      const game = await GameService.update(gameId, ownerId, dto);
      res.json(game);
    } catch (e) {
      res.status(500).json({
        message: 'Unable to update',
      });
    }

  };

  static async delete(req, res) {
    const gameId = req.params.id;
    const ownerId = req.user.id;
    try {
      await GameService.delete(gameId, ownerId);
      res.json({message: 'Successfully deleted'});
    } catch (e) {
      res.status(500).json({message: 'game was not deleted'});
    }
  };
}

export default GameController;
