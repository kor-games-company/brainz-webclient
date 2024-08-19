import { SlotsTopic } from './SlotsTopic';

export interface SlotsStage {
  id: string;
  number: number;
  name: string;
  description: string;
  imageUrl?: string;

  topics?: SlotsTopic[];
}
