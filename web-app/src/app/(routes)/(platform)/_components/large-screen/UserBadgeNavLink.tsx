'use client';

import Link from 'next/link';
import useIsActiveLink from '../../_hooks/useIsActiveLink';
import clsx from 'clsx';
import useTheme from '@/app/_hooks/useTheme';

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
  const { colors } = useTheme();

  return (
    <Link
      href={href}
      className={clsx(
        'px-2 py-2',
        'hover:bg-opposite-20 flex h-full w-full items-center gap-2 bg-opposite/10 transition-colors duration-200 ease-linear',
        {
          'bg-opposite-15': isActive,
        },
      )}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
}
