import { Theme, ThemeColors } from './types';

export const SUPPORTED_THEMES: Theme[] = ['dark', 'light'];
export const FALLBACK_THEME: Theme = 'dark';
export const THEMES_COLORS: Record<Theme, ThemeColors> = {
  dark: {
    primary: '#040D12',
    secondaryAccent: '#183D3D',
    secondary: '#5C8374',
    secondaryLight: '#93B1A6',
    opposite: '#F1F8E8',
  },
  light: {
    primary: '#F1F8E8',
    secondaryAccent: '#D8EFD3',
    secondary: '#95D2B3',
    secondaryLight: '#55AD9B',
    opposite: '#040D12',
  },
};
