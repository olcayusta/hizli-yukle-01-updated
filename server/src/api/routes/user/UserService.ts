import pgPool from '../../../config/db';
import {User} from './UserModel';

class UserService {
  async getAll() {
    try {
      const sql = `SELECT *
                   FROM users`;
      const {rows} = await pgPool.query(sql);
      return <User[]>rows
    } catch (e) {
      throw e
    }
  }

  async getUserById(userId: number) {
    try {
      const sql = `SELECT *
                   FROM users
                   WHERE id = $1`;
      const {rows} = await pgPool.query(sql, [userId]);
      return <User>rows[0]
    } catch (e) {
      throw e
    }
  }
}

export default new UserService()
