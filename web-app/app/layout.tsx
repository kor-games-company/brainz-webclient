import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cookies } from 'next/headers';
import { FALLBACK_THEME } from './theme/constants';
import ProvidersContainer from './_components/ProvidersContainer';
import { FALLBACK_LANGUAGE } from './localization/constants';
import { Theme } from './theme/types';
import { Language } from './localization/types';
import AppContainer from './_components/AppContainer';

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
  const theme = (cookies().get('theme')?.value ?? FALLBACK_THEME) as Theme;
  const lang = (cookies().get('lang')?.value ?? FALLBACK_LANGUAGE) as Language;

  return (
    <html lang="en" className="h-full w-full">
      <body className={`${inter.className} h-full w-full`}>
        <ProvidersContainer theme={theme} lang={lang}>
          <AppContainer>{children}</AppContainer>
        </ProvidersContainer>
      </body>
    </html>
  );
}
