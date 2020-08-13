declare namespace Express {
  interface Request {
    postId: number;
    tokenData: any;
    token: any;
  }

  namespace Multer {
    export interface File {
      width: number;
      height: number;
      fileId: string;
      fileName: string;
      cloudStorageError: any;
    }
  }
}
