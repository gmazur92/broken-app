import Router from 'express';
import GameController from './game.controller.js';

const router = new Router();

router.get('/all', GameController.getAll);
router.get('/:id', GameController.get);
router.post('/', GameController.create);
router.put('/:id', GameController.update);
router.delete('/:id', GameController.delete);

export default router;
