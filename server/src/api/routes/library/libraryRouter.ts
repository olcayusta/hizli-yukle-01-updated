import {Request, Response, Router} from 'express';
import isAuth from '../../middlewares/isAuth';
import libraryService from './LibraryService';

const router = Router();

export default (app: Router) => {
  app.use('/library', router);

  /*
  * Get all library items
  * */
  router.get('/', isAuth, async (req: Request, res: Response) => {
    try {
      const {userId} = req.token;
      const post = await libraryService.getallPosts(userId);
      res.json(post)
    } catch (e) {
      throw e
    }
  })
}