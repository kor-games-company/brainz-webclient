'use client';

import { PropsWithChildren, createContext } from 'react';
import { Language } from '../localization/types';
import { FALLBACK_LANGUAGE } from '../localization/constants';
import { Dictionary } from '../localization/dictionaries/Dictionary';
import { enDictionary } from '../localization/dictionaries/en/enDictionary';

type LocalizationContextType = {
  lang: Language;
  dictionary: Dictionary;
};

export const LocalizationContext = createContext<LocalizationContextType>({
  lang: FALLBACK_LANGUAGE,
  dictionary: enDictionary,
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
