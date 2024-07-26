export type Theme = 'dark' | 'light';
export type ThemeColors = {
  primary: string; // Main brand color
  secondary: string; // Secondary brand color
  accent: string; // Accent color for highlights
  background: string; // Background color
  textPrimary: string; // Primary text color
  textSecondary: string; // Secondary text color

  success: string; // Success messages
  error: string; // Error messages
  warning: string; // Warning messages
  info: string; // Informational messages

  lightGray: string;
  darkGray: string;
};
