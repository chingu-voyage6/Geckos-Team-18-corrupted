import { CardSide } from './card-side.model';

export interface Card {
  id?: string;
  title: string;
  front: CardSide;
  back: CardSide;
}
