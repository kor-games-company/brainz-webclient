import { Language } from '../types';

export type LocalizationDictionary = Record<Language, string> & {
  language: string;
};
