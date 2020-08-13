import express from 'express'
import cors from 'cors'

import authRouter from './api/routes/auth/authRouter';
import feedbackRouter from './api/routes/feedback/feedbackRouter';
import imageRouter from './api/routes/image/imageRouter';
import libraryRouter from './api/routes/library/libraryRouter';
import postRouter from './api/routes/post/postRouter';
import userRouter from './api/routes/user/userRouter';

const app = express();

app.use(express.static('src/public'));

app.use(cors());

app.use(express.json());

userRouter(app);
authRouter(app);
imageRouter(app);
postRouter(app);
libraryRouter(app);
feedbackRouter(app);

export default app

