'use client';

import React, { PropsWithChildren } from 'react';
import useTheme from '../hooks/useTheme';
import DeveloperPanel from './DeveloperPanel';

export default function AppContainer({ children }: PropsWithChildren) {
  const { theme } = useTheme();
  return (
    <main
      className={`text-opposite border-opposite h-full w-full bg-primary transition-colors duration-200 ease-linear`}
      data-theme={theme}
    >
      <DeveloperPanel />
      {children}
    </main>
  );
}
