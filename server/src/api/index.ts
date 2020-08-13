import {Router} from "express";
import libraryRouter from "./routes/library/libraryRouter";
import userRouter from "./routes/user/userRouter";
import authRouter from "./routes/auth/authRouter";
import imageRouter from "./routes/image/imageRouter";
import postRouter from "./routes/post/postRouter";

export default () => {
  const app = Router();
  userRouter(app);
  authRouter(app);
  imageRouter(app);
  postRouter(app);
  libraryRouter(app);

  return app;
}

