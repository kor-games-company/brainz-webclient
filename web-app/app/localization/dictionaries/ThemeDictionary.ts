import { Theme } from '@/app/theme/types';

export type ThemeDictionary = Record<Theme, string> & {
  theme: string;
};
