import { CardSide } from './card-side';

export interface Card {
  id?: string;
  title: string;
  front: CardSide;
  back: CardSide;
}
