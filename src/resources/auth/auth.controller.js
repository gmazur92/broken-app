import AuthService from './auth.service.js';

class AuthController {
  static async signUp(req, res) {
    const userDto = req.body;
    try {
      const createdUser = await AuthService.signUp(userDto);
      res.status(201).json({
        full_name: createdUser.full_name,
        username: createdUser.username,
        email: createdUser.email,
      });
    } catch (e) {
      res.status(500).send({message: e.message});
    }
  }

  static async signIn(req, res) {
    const userDto = req.body;
    try {
      const response = await AuthService.signIn(userDto);
      res.json({
        user: {
          id: response.user.id,
          username: response.user.username,
          full_name: response.user.full_name,
          email: response.user.email,
        },
        sessionToken: response.sessionToken,
        message: 'Successfully authenticated.',
      });
    } catch (e) {
      res.status(502).json({error: 'Passwords do not match.'});
    }
  }
}

export default AuthController;
