'use client';

import { PropsWithChildren, createContext } from 'react';
import { Language } from '../localization/types';
import { FALLBACK_LANGUAGE } from '../localization/constants';
import { Dictionary } from '../localization/dictionaries/Dictionary';
import { enDictionary } from '../localization/dictionaries/en/enDictionary';
import { useCookies } from 'react-cookie';
import { useRouter } from 'next/navigation';

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
  const [cookies, setCookies] = useCookies();
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
