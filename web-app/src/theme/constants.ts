import { Theme, ThemeColors } from './types';

export const SUPPORTED_THEMES: Theme[] = ['dark', 'light'];
export const FALLBACK_THEME: Theme = 'dark';
export const THEMES_COLORS: Record<Theme, ThemeColors> = {
  dark: {
    primary: '#282c34', // Dark blue-gray for primary background
    secondary: '#3c4048', // Medium gray for secondary elements
    accent: '#61dafb', // Light blue for accents and highlights
    background: '#1c1f26', // Very dark blue-gray for background
    opposite: '#ffffff', // White for primary text
    oppositeSecondary: '#b0b0b0', // Light gray for secondary text
    success: '#34c759', // Bright green for success messages
    error: '#ff3b30', // Bright red for error messages
    warning: '#ffcc00', // Yellow for warning messages
    info: '#007aff', // Bright blue for informational messages
    lightGray: '#a0a0a0', // Light gray for borders or inactive elements
    darkGray: '#2a2e35', // Darker gray for deeper elements
  },
  light: {
    primary: '#f5f5f5', // Very light gray for primary background
    secondary: '#dcdcdc', // Light gray for secondary elements
    accent: '#007aff', // Bright blue for accents and highlights
    background: '#ffffff', // White for background
    opposite: '#000000', // Black for primary text
    oppositeSecondary: '#4f4f4f', // Dark gray for secondary text
    success: '#34c759', // Bright green for success messages
    error: '#ff3b30', // Bright red for error messages
    warning: '#ffcc00', // Yellow for warning messages
    info: '#007aff', // Bright blue for informational messages
    lightGray: '#d3d3d3', // Light gray for borders or inactive elements
    darkGray: '#a9a9a9', // Darker gray for deeper elements
  },
};
