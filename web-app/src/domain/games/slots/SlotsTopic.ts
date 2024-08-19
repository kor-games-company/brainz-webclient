import { SlotsQuestion } from './questions/SlotsQuestion';

export interface SlotsTopic {
  id: string;
  number: number;
  name: string;

  questions?: SlotsQuestion[];
}
