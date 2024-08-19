import { Language } from '@/core/domain/localization/Language';

export type LocalizationDictionary = Record<Language, string> & {
  language: string;
};
