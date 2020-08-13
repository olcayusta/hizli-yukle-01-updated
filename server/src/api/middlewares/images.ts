import Multer, {memoryStorage} from 'multer';
import {Storage} from '@google-cloud/storage';
import config from '../../config/config';

const storage = new Storage();

const bucket = storage.bucket(config.gcloudStorageBucket!);

const imageFilter = (req: Express.Request, file: Express.Multer.File, cb: (error: (Error | null), acceptFile: boolean) => void): void => {
  if (!file.originalname.toLowerCase().match(/\.(jpg|jpeg|png|gif|webp|bmp)$/)) {
    return cb(new Error('Only image files are allowed!'), false)
  }
  cb(null, true)
};

const upload = Multer({
  storage: memoryStorage(),
  fileFilter: imageFilter,
  limits: {
    fileSize: 25 * 1024 * 1024
  }
}).single('file');

export {
  upload,
  bucket
}

