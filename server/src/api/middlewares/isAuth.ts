import {NextFunction, Request, Response} from 'express';
import jwt from 'jsonwebtoken';
import config from '../../config/config';

export default (req: Request, res: Response, next: NextFunction) => {
  try {
    const authorization: string = req.headers.authorization!;
    const token = authorization.substring(authorization.lastIndexOf(' ')).trim();
    req.token = jwt.verify(token, config.jwtSecret!);
    next();
  } catch (err) {
    res.send({err});
  }
};

