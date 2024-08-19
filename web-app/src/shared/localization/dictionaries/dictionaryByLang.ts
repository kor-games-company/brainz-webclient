import 'server-only';
import { Dictionary } from './Dictionary';
import { enDictionary } from './en/enDictionary';
import { ruDictionary } from './ru/ruDictionary';
import { LanguageEnum } from '@/core/domain/value-objects/Language';

export const dictionaryByLang: Record<LanguageEnum, Dictionary> = {
  en: enDictionary,
  ru: ruDictionary,
};
