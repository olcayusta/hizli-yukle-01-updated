import {NextFunction, Request, Response} from 'express';
import {imageSize} from 'image-size';

export default async (req: Request, res: Response, next: NextFunction) => {
    try {
        if (req.file) {
            const {width, height} = await imageSize(req.file.buffer);
            req.file.width = width!;
            req.file.height = height!;
            next();
        }
    } catch (e) {
        res.send({
            message: 'File is not real!'
        })
    }
};
