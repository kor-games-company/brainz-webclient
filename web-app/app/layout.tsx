import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cookies } from 'next/headers';
import { FALLBACK_THEME } from './theme/constants';
import ProvidersContainer from './components/ProvidersContainer';
import { FALLBACK_LANGUAGE } from './localization/constants';
import { Theme } from './theme/types';
import { Language } from './localization/types';
import AppContainer from './components/AppContainer';
import { dictionaryByLang } from './localization/dictionaries/dictionaryByLang';
import { getLangFromCookies, getThemeFromCookies } from './utils/cookies/cookies.functions';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

export const metadata: Metadata = {
  title: {
    template: '%s | BrainZ',
    default: 'BrainZ',
  },
  description: 'Have fun with your friends!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = getThemeFromCookies();
  const lang = getLangFromCookies();
  const dictionary = dictionaryByLang[lang];

  return (
    <html lang="en" className="h-full w-full">
      <body className={`${inter.className} h-full w-full`}>
        <ProvidersContainer theme={theme} lang={lang} dictionary={dictionary}>
          <AppContainer>{children}</AppContainer>
        </ProvidersContainer>
      </body>
    </html>
  );
}
