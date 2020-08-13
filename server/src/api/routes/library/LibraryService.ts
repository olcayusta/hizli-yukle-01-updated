import pgPool from '../../../config/db';
import {Post} from '../post/PostModel';

class LibraryService {
  async getallPosts(userId: number) {
    try {
      const sql = `SELECT p."postId" AS id,
                          (SELECT jsonb_agg(i.*) AS images FROM images i WHERE i."postId" = p."postId")
                   FROM images p
                   WHERE "userId" = $1
                   GROUP BY p."postId"
                   ORDER BY MAX(p."creationTime") DESC`;
      const {rows} = await pgPool.query(sql, [userId]);
      return <Post[]>rows
    } catch (e) {
      throw e
    }
  }
}

export default new LibraryService()