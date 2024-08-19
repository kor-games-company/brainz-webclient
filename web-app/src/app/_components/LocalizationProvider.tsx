'use client';

import { PropsWithChildren, createContext } from 'react';
import { useCookies } from 'react-cookie';
import { useRouter } from 'next/navigation';
import React from 'react';
import { Language } from '@/core/domain/localization/Language';
import { FALLBACK_LANGUAGE } from '@/shared/localization/constants';
import { Dictionary } from '@/shared/localization/dictionaries/Dictionary';
import { enDictionary } from '@/shared/localization/dictionaries/en/enDictionary';

type LocalizationContextType = {
  lang: Language;
  changeLang: (lang: Language) => void;
  dictionary: Dictionary;
};

export const LocalizationContext = createContext<LocalizationContextType>({
  lang: FALLBACK_LANGUAGE,
  changeLang: () => {},
  dictionary: enDictionary,
});

export default function LocalizationProvider({
  children,
  lang,
  dictionary,
}: PropsWithChildren<{ lang: Language; dictionary: Dictionary }>) {
  const [_, setCookies] = useCookies();
  const router = useRouter();

  function changeLang(lang: Language) {
    setCookies('lang', lang);
    router.refresh();
  }
  return (
    <LocalizationContext.Provider value={{ lang, dictionary, changeLang }}>
      {children}
    </LocalizationContext.Provider>
  );
}
