import type { Config } from 'tailwindcss';
import { THEMES_COLORS } from './src/theme/constants';
import { createThemes } from 'tw-colors';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  plugins: [createThemes(THEMES_COLORS)],
};
export default config;
