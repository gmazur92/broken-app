import Router from 'express';
import AuthController from './auth.controller.js';

const router = new Router();

router.post('/signup', AuthController.signUp);
router.post('/signin', AuthController.signIn);

export default router;
