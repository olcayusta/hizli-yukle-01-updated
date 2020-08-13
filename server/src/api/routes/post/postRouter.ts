import {Request, Response, Router} from 'express'

import PostService from './PostService';

const router = Router();

export default (app: Router) => {
  app.use('/posts', router);

  router.get('/:postId', async (req: Request, res: Response) => {
    const {postId} = req.params;
    try {
      const images = await PostService.getPostById(postId);
      res.send(images)
    } catch (e) {
      res.status(e.status).send(e)
    }
  });

  router.post('/', async (req: Request, res: Response) => {
    try {
      const {token, postId} = await PostService.create();
      res.status(201).send({
        status: 201,
        msg: 'success',
        id: postId,
        userId: 1,
        token
      })
    } catch (e) {
      throw e
    }
  })

}


