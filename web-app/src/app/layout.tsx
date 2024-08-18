import { Inter } from 'next/font/google';
import { getThemeFromCookies, getLangFromCookies } from '@/utils/cookies/cookies.utils';
import { dictionaryByLang } from '@/localization/dictionaries/dictionaryByLang';
import AppContainer from './_components/AppContainer';
import ProvidersContainer from './_components/ProvidersContainer';
import '@/globals.css';
import getCurrentDictionary from '@/utils/localization/getCurrentDictionary';
import React from 'react';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

export async function generateMetadata() {
  const dictionary = getCurrentDictionary();

  return {
    title: {
      template: '%s | BrainZ',
      default: 'BrainZ',
    },
    description: dictionary.metadata.rootDescription,
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = getThemeFromCookies();
  const lang = getLangFromCookies();
  const dictionary = dictionaryByLang[lang];

  return (
    <html lang={lang} className="h-full w-full">
      <body className={`${inter.className} h-full w-full`}>
        <ProvidersContainer theme={theme} lang={lang} dictionary={dictionary}>
          <AppContainer>{children}</AppContainer>
        </ProvidersContainer>
      </body>
    </html>
  );
}
