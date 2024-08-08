import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        accent: 'var(--accent)',
        background: 'var(--background)',
        opposite: 'var(--opposite)',
        'opposite-secondary': 'var(--opposite-secondary)',
        success: 'var(--success)',
        error: 'var(--error)',
        warning: 'var(--warning)',
        info: 'var(--info)',
        'light-gray': 'var(--light-gray)',
        'dark-gray': 'var(--dark-gray)',
      },
    },
  },
};
export default config;
