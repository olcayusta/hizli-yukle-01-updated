import pgPool from '../../../config/db';
import {bucket} from '../../middlewares/images';
import {Image} from './ImageModel';

class ImageService {
  async create(file: Express.Multer.File, fileId: string, fileName: string, tokenData: any) {
    const postId = tokenData.postId;
    const publicUrl = `https://storage.googleapis.com/${bucket.name}/${fileName}`;

    const mimeType = file.mimetype;
    const size = file.size;

    const userId = 1;

    const query = {
      text: 'INSERT INTO images (id, "publicUrl", "postId", filename, "mimeType", size, "parentId", width, height, "userId") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *',
      values: [fileId, publicUrl, postId, fileName, mimeType, size, tokenData.postId, file.width, file.height, userId]
    };

    try {
      const {rows} = await pgPool.query(query);
      const image: Image = rows[0];
      return {postId, id: image.id, publicUrl: publicUrl}
    } catch (e) {
      throw e
    }
  }

  async delete(imageId: string) {
    try {
      const {rows} = await pgPool.query(`DELETE FROM images WHERE id = $1 RETURNING *`, [imageId]);
      return <Image>rows[0]
    } catch (e) {
      throw new Error('Not found!')
    }
  }
}

export default new ImageService()
