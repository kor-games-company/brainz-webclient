import clsx from 'clsx';
import Link from 'next/link';
import React, { PropsWithChildren } from 'react';
import NavLinkClientWrapper from './NavLinkClientWrapper';

type Props = {
  href: string;
  className?: string;
};

export default function NavLink({ children, className, href }: PropsWithChildren<Props>) {
  return (
    <Link href={href} className="block h-full w-full">
      <NavLinkClientWrapper target={href} className={className}>
        {children}
      </NavLinkClientWrapper>
    </Link>
  );
}
