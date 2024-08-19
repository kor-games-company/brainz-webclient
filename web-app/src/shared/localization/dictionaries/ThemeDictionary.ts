import { Theme } from '@/shared/theme/types';

export type ThemeDictionary = Record<Theme, string> & {
  theme: string;
};
