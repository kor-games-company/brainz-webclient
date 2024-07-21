'use client';

import React, { PropsWithChildren } from 'react';
import useTheme from '../_hooks/useTheme';

export default function AppContainer({ children }: PropsWithChildren) {
  const { theme } = useTheme();
  return (
    <main className={`h-full w-full`} data-theme={theme}>
      {children}
    </main>
  );
}
