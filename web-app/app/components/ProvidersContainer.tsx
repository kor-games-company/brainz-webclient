'use client';

import React, { PropsWithChildren } from 'react';
import LocalizationProvider from './LocalizationProvider';
import ThemeProvider from './ThemeProvider';
import { Language } from '../localization/types';
import { Theme } from '../theme/types';
import { Dictionary } from '../localization/dictionaries/Dictionary';

export default function ProvidersContainer({
  children,
  lang,
  dictionary,
  theme,
}: PropsWithChildren<{ lang: Language; dictionary: Dictionary; theme: Theme }>) {
  return (
    <LocalizationProvider lang={lang} dictionary={dictionary}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </LocalizationProvider>
  );
}
