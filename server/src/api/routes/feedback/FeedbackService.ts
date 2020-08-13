import pgPool from '../../../config/db';
import {Feedback} from './FeedbackModel';

class FeedbackService {
  async create(msg: string) {
    try {
      const sql = `INSERT INTO feedback (content)
                   VALUES ($1)
                   RETURNING *`;
      const {rows} = await pgPool.query(sql, [msg]);
      return <Feedback>rows[0]
    } catch (e) {
      throw e
    }
  }
}

export default new FeedbackService()