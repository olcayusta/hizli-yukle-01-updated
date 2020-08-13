import {Request, Response, Router} from 'express';
import FeedbackService from './FeedbackService';

const router = Router();

export default (app: Router) => {
  app.use('/feedbacks', router);

  router.post('/', async (req: Request, res: Response) => {
    try {
      const {msg} = req.body;
      const feedback = await FeedbackService.create(msg);
      res.json(feedback)
    } catch (e) {
      throw e;
    }
  })
}