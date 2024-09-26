'use client';

import React, { PropsWithChildren } from 'react';
import useTheme from '../_hooks/useTheme';

export default function AppContainer({ children }: PropsWithChildren) {
  const { theme } = useTheme();
  return (
    <div
      className={`theme-${theme} h-full w-full border-opposite bg-primary text-opposite transition-colors duration-200 ease-linear`}
      data-theme={theme}
    >
      {children}
    </div>
  );
}
