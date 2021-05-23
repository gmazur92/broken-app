import Router from 'express';
import gameRouter from '../resources/game/game.router.js';
import authRouter from '../resources/auth/auth.router.js';
import validateSession from '../middleware/validate-session.js';

const router = new Router();

router.use('/auth', authRouter);
router.use('/game', validateSession, gameRouter);

export default router;
