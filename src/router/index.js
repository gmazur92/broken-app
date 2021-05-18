import Router from 'express';
import validateSession from '../middleware/validate-session.js';

const router = new Router();

router.use('/auth', authRouter);
router.use('/game', validateSession, gameRouter);

export default router;
