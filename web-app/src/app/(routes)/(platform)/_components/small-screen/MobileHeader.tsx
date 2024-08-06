import React from 'react';
import Logo from '../Logo';
import MobileSidebarOpener from './MobileSidebarOpener';
import MobileSidebar from './MobileSidebar';

export default function MobileHeader() {
  return (
    <header className="flex items-center justify-between bg-secondary px-8 py-4 shadow-sm shadow-black/30">
      <Logo />
      <MobileSidebarOpener>
        <MobileSidebar />
      </MobileSidebarOpener>
    </header>
  );
}
