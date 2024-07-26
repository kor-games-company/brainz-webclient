import { Theme, ThemeColors } from './types';

export const SUPPORTED_THEMES: Theme[] = ['dark', 'light'];
export const FALLBACK_THEME: Theme = 'dark';
export const THEMES_COLORS: Record<Theme, ThemeColors> = {
  dark: {
    primary: '#1E1E1E', // Dark Gray for primary background
    secondary: '#252525', // Slightly lighter gray for secondary elements
    accent: '#FF6F61', // Coral for accents and highlights
    background: '#121212', // Black or very dark gray for background
    textPrimary: '#FFFFFF', // White for primary text
    textSecondary: '#B3B3B3', // Light gray for secondary text
    success: '#4CAF50', // Green for success messages
    error: '#F44336', // Red for error messages
    warning: '#FF9800', // Orange for warning messages
    info: '#2196F3', // Blue for informational messages
    lightGray: '#9E9E9E', // Light gray for borders or inactive elements
    darkGray: '#212121', // Dark gray for deeper elements
  },
  light: {
    primary: '#FFFFFF', // White for primary background
    secondary: '#F5F5F5', // Light gray for secondary elements
    accent: '#007BFF', // Bright blue for accents and highlights
    background: '#E0E0E0', // Light gray for background
    textPrimary: '#000000', // Black for primary text
    textSecondary: '#616161', // Dark gray for secondary text
    success: '#4CAF50', // Green for success messages
    error: '#F44336', // Red for error messages
    warning: '#FF9800', // Orange for warning messages
    info: '#2196F3', // Blue for informational messages
    lightGray: '#E0E0E0', // Light gray for borders or inactive elements
    darkGray: '#757575', // Dark gray for deeper elements
  },
};
