import { Inter } from 'next/font/google';
import AppContainer from './_components/AppContainer';
import ProvidersContainer from './_components/ProvidersContainer';
import '@/globals.css';
import React from 'react';
import {
  getCurrentUserDictionary,
  getCurrentUserLanguage,
  getCurrentUserTheme,
} from '@/core/infrastructure/auth/auth.utils';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

export async function generateMetadata() {
  const dictionary = await getCurrentUserDictionary();

  return {
    title: {
      template: '%s | BrainZ',
      default: 'BrainZ',
    },
    description: dictionary.metadata.rootDescription,
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = await getCurrentUserTheme();
  const lang = await getCurrentUserLanguage();
  const dictionary = await getCurrentUserDictionary();

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
