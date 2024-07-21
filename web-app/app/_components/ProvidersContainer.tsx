'use client';

import React, { PropsWithChildren } from 'react';
import LocalizationProvider from './LocalizationProvider';
import ThemeProvider from './ThemeProvider';
import { Language } from '../localization/types';
import { Theme } from '../theme/types';

export default function ProvidersContainer({
  children,
  lang,
  theme,
}: PropsWithChildren<{ lang: Language; theme: Theme }>) {
  return (
    <LocalizationProvider lang={lang}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </LocalizationProvider>
  );
}
