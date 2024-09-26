'use client';

import { usePathname } from 'next/navigation';

export default function useIsActiveLink(target: string) {
  const pathname = usePathname();

  const isRoot = pathname === '/' && target === '/';
  const isTargetRoot = target === '/';
  return isRoot || (!isTargetRoot && pathname.startsWith(target));
}
