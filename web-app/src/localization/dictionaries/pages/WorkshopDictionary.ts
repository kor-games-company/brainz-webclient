import { SlotsDictionary } from './workshop/SlotsDictionary';

export type WorkshopDictionary = {
  name: string;
  description: string;
  createPackTitle: string;
  createPackDescription: string;
  createSlotsPack: string;
  createTerritoryPack: string;
  createQuizPack: string;
  inDevelopment: string;
  returnToWorkshop: string;
  slots: SlotsDictionary;
};
