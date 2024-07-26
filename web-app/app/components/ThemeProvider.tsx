'use client';

import { PropsWithChildren, createContext } from 'react';
import { Theme } from '../theme/types';
import { FALLBACK_THEME } from '../theme/constants';

type ThemeContextType = {
  theme: Theme;
};

export const ThemeContext = createContext<ThemeContextType>({ theme: FALLBACK_THEME });

export default function ThemeProvider({
  children,
  ...themeProps
}: PropsWithChildren<ThemeContextType>) {
  return <ThemeContext.Provider value={themeProps}>{children}</ThemeContext.Provider>;
}
