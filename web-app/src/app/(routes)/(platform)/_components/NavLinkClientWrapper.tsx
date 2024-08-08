'use client';

import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import React, { PropsWithChildren } from 'react';
import { useMobileSidebarOpenerContext } from './small-screen/MobileSidebarOpener';
import useIsActiveLink from '../_hooks/useIsActiveLink';

type Props = {
  target: string;
  className?: string;
};

export default function NavLinkClientWrapper({
  children,
  target,
  className,
}: PropsWithChildren<Props>) {
  const isActive = useIsActiveLink(target);
  const { close } = useMobileSidebarOpenerContext();

  return (
    <div
      className={clsx(
        'h-full w-full transition-colors duration-200 ease-linear hover:bg-opposite/15',
        {
          'bg-opposite/10': isActive,
        },
        className,
      )}
      onClick={close}
    >
      {children}
    </div>
  );
}
