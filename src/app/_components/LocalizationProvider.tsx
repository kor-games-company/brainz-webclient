'use client';

import { PropsWithChildren, createContext } from 'react';
import { useCookies } from 'react-cookie';
import { useRouter } from 'next/navigation';
import React from 'react';
import { Dictionary } from '@/shared/localization/dictionaries/Dictionary';
import { enDictionary } from '@/shared/localization/dictionaries/en/enDictionary';
import { LanguageEnum, FALLBACK_LANGUAGE } from '@/core/domain/value-objects/Language';

type LocalizationContextType = {
  lang: LanguageEnum;
  changeLang: (lang: LanguageEnum) => void;
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
}: PropsWithChildren<{ lang: LanguageEnum; dictionary: Dictionary }>) {
  const [_, setCookies] = useCookies();
  const router = useRouter();

  function changeLang(lang: LanguageEnum) {
    setCookies('lang', lang);
    router.refresh();
  }
  return (
    <LocalizationContext.Provider value={{ lang, dictionary, changeLang }}>
      {children}
    </LocalizationContext.Provider>
  );
}
