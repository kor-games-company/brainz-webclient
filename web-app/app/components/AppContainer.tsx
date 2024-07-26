'use client';

import React, { PropsWithChildren } from 'react';
import useTheme from '../hooks/useTheme';
import DeveloperSettings from './DeveloperSettings';

export default function AppContainer({ children }: PropsWithChildren) {
  const { theme } = useTheme();
  return (
    <main
      className={`h-full w-full bg-primary text-textPrimary transition-colors duration-200 ease-linear`}
      data-theme={theme}
    >
      <DeveloperSettings />
      {children}
    </main>
  );
}
