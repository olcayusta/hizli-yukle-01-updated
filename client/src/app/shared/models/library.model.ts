import { Image } from '@shared/models/image.model';

export interface Library {
  id: string;
  images: Image[];
}
