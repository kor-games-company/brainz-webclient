import React from 'react';
import Logo from './Logo';
import Link from 'next/link';
import NavLink from './NavLink';
import Button from '@/app/_ui/buttons/Button';

const links = [{ href: '/library', label: 'Library' }];

export default function Header() {
  return (
    <header className="flex items-center justify-between bg-secondary px-32 py-4 shadow-sm shadow-black/30">
      <Logo />
      <div className="w-1/3">
        <nav></nav>
      </div>
      <div>
        <Link href="/signin">
          <Button>Sign In</Button>
        </Link>
      </div>
    </header>
  );
}
