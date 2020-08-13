import {Request, Response, Router} from 'express'
import jwt from 'jsonwebtoken';
import config from '../../../config/config';
import AuthService from './AuthService';

const router = Router();

export default (app: Router) => {
  app.use('/auth', router);

  router.post('/', async (req: Request, res: Response) => {
    try {
      const {nanoId, token} = await AuthService.giveToken();
      res.status(201).send({
        status: 201,
        msg: 'success',
        id: nanoId,
        token
      })
    } catch (e) {
      throw e
    }
  });

  router.post('/login', async (req: Request, res: Response) => {
    try {
      const {email, password} = req.body;
      const user = await AuthService.login(email, password);
      user.token = jwt.sign({
        userId: user.id
      }, config.jwtSecret!, {
        subject: user.id.toString()
      });
      res.json(user)
    } catch (e) {
      throw e
    }
  });

  router.post('/register', async (req: Request, res: Response) => {
    try {
      const {email, password} = req.body;
      const user = await AuthService.register(email, password);
      user.token = jwt.sign({
        userId: user.id
      }, config.jwtSecret!, {
        subject: user.id.toString()
      });
      res.json(user)
    } catch (e) {
      throw e
    }
  })
}






