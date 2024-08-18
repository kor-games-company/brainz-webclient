'use client';

import Link from 'next/link';
import useIsActiveLink from '../../_hooks/useIsActiveLink';
import clsx from 'clsx';
import React from 'react';

export default function UserBadgeNavLink({
  icon,
  label,
  href,
}: {
  icon: JSX.Element;
  label: string;
  href: string;
}) {
  const isActive = useIsActiveLink(href);
  return (
    <Link
      href={href}
      className={clsx(
        'flex h-full w-full items-center gap-2 px-2 py-3 transition-colors duration-200 ease-linear hover:bg-opposite/20',
        {
          'bg-opposite/10': isActive,
        },
      )}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
}
