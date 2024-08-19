'use client';

import React, { PropsWithChildren } from 'react';
import { Theme } from '../../shared/theme/types';
import { Dictionary } from '../../shared/localization/dictionaries/Dictionary';
import { Language } from '@/core/domain/localization/Language';
import LocalizationProvider from './LocalizationProvider';
import ThemeProvider from './ThemeProvider';

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
