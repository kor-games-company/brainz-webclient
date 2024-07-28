'use client';

import { Bars4Icon } from '@heroicons/react/20/solid';
import React, { PropsWithChildren, createContext, useContext, useState } from 'react';

type MobileSidebarOpenerContext = {
  close: () => void;
};

const MobileSidebarOpenerContext = createContext<MobileSidebarOpenerContext>({
  close: () => {},
});

export function useMobileSidebarOpenerContext() {
  return useContext(MobileSidebarOpenerContext);
}

export default function MobileSidebarOpener({ children }: PropsWithChildren) {
  const [isOpened, setIsOpened] = useState(false);
  const handleClick = () => {
    setIsOpened((prev) => !prev);
  };

  const handleBackgroundClick = () => {
    setIsOpened(false);
  };

  return (
    <div>
      <button onClick={handleClick}>
        <Bars4Icon className="h-6 w-6" />
      </button>
      <div
        className={`fixed left-0 top-0 z-30 h-full w-full bg-black bg-opacity-50 transition-opacity duration-500 ease-in-out ${
          isOpened ? 'opacity-100 backdrop-blur-sm' : 'pointer-events-none opacity-0'
        }`}
        onClick={handleBackgroundClick}
      ></div>
      <div
        className={`fixed left-0 top-0 z-30 h-full w-3/4 bg-secondary shadow-lg transition-transform duration-500 ease-in-out ${
          isOpened ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <MobileSidebarOpenerContext.Provider value={{ close: () => setIsOpened(false) }}>
          {children}
        </MobileSidebarOpenerContext.Provider>
      </div>
    </div>
  );
}
