import {Request, Response} from 'express';
import jwt from 'jsonwebtoken';
import {nanoid} from 'nanoid';
import config from '../../../config/config';
import pgPool from '../../../config/db';
import {Image} from '../image/ImageModel';

class PostService {
    async getPostById(postId: string) {
        const sql = `SELECT *
                 FROM images
                 WHERE "parentId" = $1
                 ORDER BY "creationTime"`;
        const {rows, rowCount} = await pgPool.query(sql, [postId]);
        if (rowCount) {
            /*  const err = new Error();
              err.message = 'Post not found!';
              err.name = '100';*/
            return <Image[]>rows
        } else {
            throw {
                status: 404,
                error: 'Post not found!'
            }
        }
    }

    async getAllPostsByUserId(req: Request, res: Response) {
        const {userId} = req.params;
        const sql = `SELECT *
                 FROM images
                 WHERE "userId" = $1
                 LIMIT 5`;
        const {rows, rowCount} = await pgPool.query(sql, [userId]);
        if (!rowCount) {
            throw new Error('not found')
        } else {
            return <Image[]>rows
        }
    }

    async create() {
        try {
            const postId = nanoid(12);

            const token = jwt.sign({
                foo: 'bar',
                postId,
                userId: 1
            }, config.jwtSecret!, {
                // expiresIn: 60
            });
            return {postId, token}
        } catch (e) {
            throw e
        }
    }
}

export default new PostService()
