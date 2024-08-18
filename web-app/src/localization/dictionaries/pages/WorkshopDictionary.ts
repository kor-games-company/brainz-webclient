import { SlotsDictionary } from './workshop/SlotsDictionary';

export type WorkshopDictionary = {
  name: string;
  description: string;
  createGameTitle: string;
  createGameDescription: string;
  createSlotsPack: string;
  createTerritoryPack: string;
  createQuizPack: string;
  inDevelopment: string;
  returnToWorkshop: string;
  createPackFieldsetLegend: string;
  createPackFieldLabel: string;
  createPackFieldDescription: string;
  createPackFieldImage: string;
  slots: SlotsDictionary;
};
