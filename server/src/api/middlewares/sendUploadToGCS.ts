import {NextFunction, Request, Response} from 'express';
import mime from 'mime-types';
import nanoid from 'nanoid';
import {bucket} from './images';

export default (req: Request, res: Response, next: NextFunction) => {
  const file = req.file;

  if (!file) {
    res.status(400).send('Hiçbir dosya yüklenmedi!');
  }

  const fileId = nanoid(12);
  const fileName = `${fileId}.${mime.extension(req.file.mimetype)}`;

  req.file.fileId = fileId;
  req.file.fileName = fileName;

  const blob = bucket.file(fileName);

  const stream = blob.createWriteStream({
    gzip: true,
    contentType: req.file.mimetype,
    metadata: {
      cacheControl: 'public, max-age=31536000'
    },
    public: true,
    resumable: false
  });

  stream.on('error', (err: any) => {
    req.file.cloudStorageError = err;
    next(err)
  });

  stream.on('finish', () => {
    next();
  });

  stream.end(req.file.buffer)
};