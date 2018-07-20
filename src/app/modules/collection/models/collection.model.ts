import { Card } from './card.model';

export interface Collection {
  id?: string;
  authorId?: string;
  name: string;
  public: boolean;
  cards?: Card[];
}
