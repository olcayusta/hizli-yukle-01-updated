export interface Image {
  id: string;
  publicUrl: string;
  postId: string;
  mimeType: string;
  width: number;
  height: number;
  size: number;
  filename: string;
  creationTime: Date;
  parentId: string;
}
