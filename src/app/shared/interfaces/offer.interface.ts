import { IComment } from './comment.interface';

export interface IOffer {
  _id: string;
  url: string;
  imgUrl?: string;
  comments: IComment[];
}
