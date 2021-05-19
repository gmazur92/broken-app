import Router from 'express';
import GameController from './game.controller.js';

const router = new Router();

router.get('/all', GameController.getAll);
router.get('/:id', GameController.get);
// router.post('/create', GameController.create);
// router.put('/update/:id', GameController.update);
// router.delete('/remove/:id', GameController.delete);

export default router;
