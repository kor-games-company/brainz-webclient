import type { Config } from 'tailwindcss';
import { THEMES_COLORS } from './app/theme/constants';
import { createThemes } from 'tw-colors';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [createThemes(THEMES_COLORS)],
};
export default config;
