import {Image} from '../image/ImageModel';

export interface Post {
  id: string;
  creationTime: Date;
  images: Image[];
}
