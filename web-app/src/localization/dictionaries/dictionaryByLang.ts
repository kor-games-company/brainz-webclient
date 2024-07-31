import { Language } from '../types';
import { Dictionary } from './Dictionary';
import { enDictionary } from './en/enDictionary';
import { ruDictionary } from './ru/ruDictionary';

export const dictionaryByLang: Record<Language, Dictionary> = {
  en: enDictionary,
  ru: ruDictionary,
};
