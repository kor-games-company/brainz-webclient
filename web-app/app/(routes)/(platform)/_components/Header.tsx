import React from 'react';
import Logo from './Logo';
import Navbar from './Navbar';

export default function Header() {
  return (
    <header className="flex items-center justify-between bg-secondary px-8 py-4 shadow-sm shadow-black/30 md:px-32">
      <Logo />
      <Navbar />
    </header>
  );
}
