import { ThemeEnum } from '@/core/domain/value-objects/Theme';

export type ThemeDictionary = Record<ThemeEnum, string> & {
  theme: string;
};
