'use client';

import { PropsWithChildren, createContext } from 'react';
import { Theme, ThemeColors } from '../../theme/types';
import { FALLBACK_THEME, THEMES_COLORS } from '../../theme/constants';
import { useRouter } from 'next/navigation';
import { useCookies } from 'react-cookie';
import React from 'react';

type ThemeContextType = {
  theme: Theme;
  colors: ThemeColors;
  changeTheme: (theme: Theme) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: FALLBACK_THEME,
  colors: THEMES_COLORS[FALLBACK_THEME],
  changeTheme: () => {},
});

export default function ThemeProvider({ children, theme }: PropsWithChildren<{ theme: Theme }>) {
  const [_, setCookies] = useCookies();
  const router = useRouter();

  function changeTheme(theme: Theme) {
    setCookies('theme', theme);
    router.refresh();
  }
  return (
    <ThemeContext.Provider value={{ theme, colors: THEMES_COLORS[theme], changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
