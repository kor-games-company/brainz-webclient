import { Inter } from 'next/font/google';
import '@/globals.css';
import React from 'react';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

export async function generateMetadata() {
  return {
    title: {
      template: '%s | BrainZ',
      default: 'BrainZ',
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={'en'} className="h-full w-full">
      <body className={`${inter.className} h-full w-full`}>{children}</body>
    </html>
  );
}
