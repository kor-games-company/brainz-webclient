'use client';

import React, { PropsWithChildren } from 'react';
import { Dictionary } from '../../shared/localization/dictionaries/Dictionary';
import LocalizationProvider from './LocalizationProvider';
import ThemeProvider from './ThemeProvider';
import { LanguageEnum } from '@/core/domain/value-objects/Language';
import { ThemeEnum } from '@/core/domain/value-objects/Theme';

export default function ProvidersContainer({
  children,
  lang,
  dictionary,
  theme,
}: PropsWithChildren<{ lang: LanguageEnum; dictionary: Dictionary; theme: ThemeEnum }>) {
  return (
    <LocalizationProvider lang={lang} dictionary={dictionary}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </LocalizationProvider>
  );
}
