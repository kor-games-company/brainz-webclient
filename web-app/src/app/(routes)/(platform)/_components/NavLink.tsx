'use client';

import clsx from 'clsx';
import Link from 'next/link';
import React, { PropsWithChildren } from 'react';
import useIsActiveLink from '../_hooks/useIsActiveLink';
import { useMobileSidebarOpenerContext } from './small-screen/MobileSidebarOpener';

type Props = {
  href: string;
  className?: string;
};

export default function NavLink({ children, className, href }: PropsWithChildren<Props>) {
  const isActive = useIsActiveLink(href);
  const { close } = useMobileSidebarOpenerContext();

  return (
    <Link
      href={href}
      className={clsx(
        'hover:bg-opposite/20 h-full w-full transition-colors duration-200 ease-linear',
        {
          'bg-opposite/10': isActive,
        },
        className,
      )}
      onClick={close}
    >
      {children}
    </Link>
  );
}
