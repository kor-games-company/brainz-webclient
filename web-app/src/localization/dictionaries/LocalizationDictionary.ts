import { Language } from '@/domain/common/Language';

export type LocalizationDictionary = Record<Language, string> & {
  language: string;
};
