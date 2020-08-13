import {NextFunction, Request, Response} from 'express';
import {upload} from './images';

export default (req: Request, res: Response, next: NextFunction) => {
  upload(req, res, (err) => {
    if (err) {
      console.log(req.file);
      console.log(err)
      res.send({err})
    } else {
      next()
    }
  })
};