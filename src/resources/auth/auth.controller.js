import AuthService from './auth.service.js';

class AuthController {
  static async signUp(req, res) {
    const userDto = req.body;
    try {
      const createdUser = await AuthService.signUp(userDto);
      res.status(201).json(createdUser);
    } catch (e) {
      res.status(500).send({message: e.message});
    }
  }

  static async signIn(req, res) {
    const userDto = req.body;
    try {
      const user = await AuthService.signIn(userDto);
      res.json(user);
    } catch (e) {
      res.status(502).json({error: 'Passwords do not match.'}); // @TODO specify error
    }
  }
}

export default AuthController;
