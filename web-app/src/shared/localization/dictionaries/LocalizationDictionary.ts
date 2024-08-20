import { LanguageEnum } from '@/core/domain/value-objects/Language';

export type LocalizationDictionary = Record<LanguageEnum, string> & {
  language: string;
};
