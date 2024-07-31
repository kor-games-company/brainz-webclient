import { Theme } from '@/theme/types';

export type ThemeDictionary = Record<Theme, string> & {
  theme: string;
};
