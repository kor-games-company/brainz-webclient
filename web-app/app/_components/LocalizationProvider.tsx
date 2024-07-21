'use client';

import { PropsWithChildren, createContext } from 'react';
import { Language } from '../localization/types';
import { FALLBACK_LANGUAGE } from '../localization/constants';

type LocalizationContextType = {
  lang: Language;
};

export const LocalizationContext = createContext<LocalizationContextType>({
  lang: FALLBACK_LANGUAGE,
});

export default function LocalizationProvider({
  children,
  ...localizationProps
}: PropsWithChildren<LocalizationContextType>) {
  return (
    <LocalizationContext.Provider value={localizationProps}>
      {children}
    </LocalizationContext.Provider>
  );
}
