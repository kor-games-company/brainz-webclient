'use client';

import { PropsWithChildren, createContext } from 'react';
import { useRouter } from 'next/navigation';
import { useCookies } from 'react-cookie';
import React from 'react';
import { FALLBACK_THEME } from '@/shared/theme/constants';
import { ThemeEnum } from '@/core/domain/value-objects/Theme';

type ThemeContextType = {
  theme: ThemeEnum;
  changeTheme: (theme: ThemeEnum) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: FALLBACK_THEME,
  changeTheme: () => {},
});

export default function ThemeProvider({
  children,
  theme,
}: PropsWithChildren<{ theme: ThemeEnum }>) {
  const [_, setCookies] = useCookies();
  const router = useRouter();

  function changeTheme(theme: ThemeEnum) {
    setCookies('theme', theme);
    router.refresh();
  }
  return <ThemeContext.Provider value={{ theme, changeTheme }}>{children}</ThemeContext.Provider>;
}
