import {NextFunction, Request, Response, Router} from 'express'
import handleFile from '../../middlewares/handleFile';
import isAuth from '../../middlewares/isAuth';
import isImage from '../../middlewares/isImage';
import sendUploadToGCS from '../../middlewares/sendUploadToGCS';
import ImageService from './ImageService';

const router = Router();

export default (app: Router) => {
  app.use('/images', router);

  /**
   * POST
   */
  router.post('/', isAuth, handleFile, isImage, sendUploadToGCS, async (req: Request, res: Response, next: NextFunction) => {
    const token = req.token;
    try {
      const {postId, id, publicUrl} = await ImageService.create(req.file, req.file.fileId, req.file.fileName, token);
      res.status(201).send({
        message: 'The item was created successfully',
        postId,
        id,
        publicUrl
      })
    } catch (e) {
      throw e
    }
  });

  /**
   * DELETE
   */
  router.delete('/:imageId', async (req: Request, res: Response) => {
    const {imageId} = req.params;
    try {
      const image = await ImageService.delete(imageId);
      res.send(image)
    } catch (e) {
      throw e
    }
  })
}
