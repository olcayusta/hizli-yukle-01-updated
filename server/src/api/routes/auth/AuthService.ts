import {Request, Response} from 'express';
import jwt from 'jsonwebtoken';
import nanoid from 'nanoid';
import config from '../../../config/config';
import pgPool from '../../../config/db';
import {User} from '../user/UserModel';


class AuthService {
  async authenticate(req: Request, res: Response) {
    const token = jwt.sign({
      foo: 'bar',
    }, process.env.SECRET_KEY!, {
      subject: '100'
    })
  }

  async giveToken() {
    const nanoId = nanoid(12);
    const token = jwt.sign({
      foo: 'bar',
      postId: nanoId
    }, config.jwtSecret!);

    return {nanoId, token};

  }

  async login(email: string, password: string) {
    try {
      const sql = `SELECT *
                   FROM users
                   WHERE email = $1
                     AND password = $2`;
      const {rows} = await pgPool.query(sql, [email, password]);
      return <User>rows[0]
    } catch (e) {
      throw e
    }
  }

  async register(email: string, password: string) {
    try {
      const sql = `INSERT INTO users (email, password)
                   VALUES ($1, $2)
                   RETURNING *`;
      const {rows} = await pgPool.query(sql, [email, password]);
      return <User>rows[0]
    } catch (e) {
      throw e
    }
  }
}

export default new AuthService()
