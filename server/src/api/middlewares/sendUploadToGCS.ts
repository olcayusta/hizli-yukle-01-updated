import {NextFunction, Request, Response} from 'express';
import mime from 'mime-types';
import {nanoid} from 'nanoid';
import {bucket} from './images';
import multer from "multer";
import {createWriteStream} from 'fs';

export default (req: Request, res: Response, next: NextFunction) => {
    const file = req.file;

    console.log(req.file);

    if (!file) {
        res.status(400).send('Hiçbir dosya yüklenmedi!');
    }

    const fileId = nanoid(12);
    if (req.file) {
        const fileName = `${fileId}.${mime.extension(req.file.mimetype)}`;

        req.file.fileId = fileId;
        req.file.fileName = fileName;

        const stream = createWriteStream('./uploads' + req.file.fileName);

        stream.on('error', err => {
            console.dir(err);
            next(err);
        })

        stream.on('finish', () => {
            next();
        })

        console.log('dosya yuklendi')

        stream.end(req.file.buffer);

      /*  const blob = bucket.file(fileName);

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
            // @ts-ignore
          req.file.cloudStorageError = err;
            next(err)
        });

        stream.on('finish', () => {
            next();
        });

        stream.end(req.file.buffer)*/
    }

};
