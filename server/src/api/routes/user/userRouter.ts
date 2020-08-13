import {Request, Response, Router} from 'express'
import UserService from './UserService'
import {User} from './UserModel'

const router = Router();

export default (app: Router) => {
  app.use('/users', router);

  router.get('/', async (req: Request, res: Response) => {
    try {
      const users: User[] = await UserService.getAll();
      res.send(users)
    } catch (e) {
      throw e
    }
  });

  router.get('/:userId', async (req: Request, res: Response) => {
    try {
      const {userId} = req.params;
      const user = await UserService.getUserById(+userId);
      res.send(user)
    } catch (e) {
      throw e
    }
  })
}