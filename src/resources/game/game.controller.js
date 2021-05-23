import GameService from './game.service.js';
import isEmpty from '../../utils/isEmpty.js';
import { excludeFromGameResponse } from '../../common/responseExcludeConstants.js';
import deletePropsFromObj from '../../utils/deletePropsFromObj.js';

class GameController {
  static async getAll(req, res) {
    try {
      const games = await GameService.getAll(req.user.id);
      const gamesToResponse = games.map(elem => deletePropsFromObj(elem, excludeFromGameResponse));

      res.json({
        games: gamesToResponse,
        message: 'Games fetched.',
      });
    } catch (e) {
      res.status(404).json({
        message: 'Games not found',
      });
    }
  };

  static async get(req, res) {
    const id = req.params.id;
    const dto = {id, ownerId: req.user.id};
    try {
      const game = await GameService.get(dto);
      const gameToResponse = deletePropsFromObj(game, excludeFromGameResponse);
      res.json({
        game: gameToResponse,
        message: 'Game fetched.',
      });
    } catch (e) {
      res.status(404).json({
        message: 'Game not found',
      });
    }
  };

  static async create(req, res) {
    if (isEmpty(req.body)) {
      return res.status(400).json({
        message: 'No data to create a new game',
      });
    }
    const dto = req.body;
    dto.ownerId = req.user.id;
    try {
      const game = await GameService.create(dto);
      const gameToResponse = deletePropsFromObj(game, excludeFromGameResponse);
      res.status(201).json({game: gameToResponse, message: 'Game created.'});
    } catch (e) {
      console.log(e);
      res.status(500).json({
        message: 'Game was not created, check passed params',
      });
    }
  };

  static async update(req, res) {
    if (isEmpty(req.body)) {
      return res.status(400).json({
        message: 'No data to update a game',
      });
    }
    const dto = req.body;
    const gameId = req.params.id;
    const ownerId = req.user.id;
    try {
      const game = await GameService.update(gameId, ownerId, dto);
      const gameToResponse = deletePropsFromObj(game, excludeFromGameResponse);
      res.json({game: gameToResponse, message: 'Game is updated'});
    } catch (e) {
      res.status(500).json({
        message: 'Unable to update, check passed params',
      });
    }
  };

  static async delete(req, res) {
    const gameId = req.params.id;
    const ownerId = req.user.id;
    const status = await GameService.delete(gameId, ownerId);
    res.status(200).json({message: !!status ? 'Successfully deleted' : 'Game with such id doesn\'t exist'});
  };
}

export default GameController;
