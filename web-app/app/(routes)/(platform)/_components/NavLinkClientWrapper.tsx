'use client';

import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import React, { PropsWithChildren } from 'react';
import { useMobileSidebarOpenerContext } from './MobileSidebarOpener';

type Props = {
  target: string;
  className?: string;
};

export default function NavLinkClientWrapper({
  children,
  target,
  className,
}: PropsWithChildren<Props>) {
  const pathname = usePathname();
  const { close } = useMobileSidebarOpenerContext();

  const isRoot = pathname === '/' && target === '/';
  const isTargetRoot = target === '/';
  const isActive = isRoot || (!isTargetRoot && pathname.startsWith(target));

  return (
    <div
      className={clsx(
        'hover:bg-opposite/20 transition-colors duration-200 ease-linear',
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
