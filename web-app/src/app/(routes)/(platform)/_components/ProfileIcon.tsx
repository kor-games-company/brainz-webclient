import React from 'react';
import Image from 'next/image';
import { getThemeFromCookies } from '@/utils/cookies/cookies.utils';
import { THEMES_COLORS } from '@/theme/constants';

type Props = {
  name: string;
  imageSrc?: string | null;
};

export default function ProfileIcon({ name, imageSrc }: Props) {
  const theme = getThemeFromCookies();
  const colors = THEMES_COLORS[theme];

  const initials = name.substring(0, 2);

  return imageSrc ? (
    <div className="h-full w-full">
      <Image src={imageSrc} width={48} height={48} alt={`User ${name} profile image`} />
    </div>
  ) : (
    <div className="flex h-full w-full items-center justify-center rounded-full bg-accent">
      <span className="text-xl font-medium uppercase text-primary">{initials}</span>
    </div>
  );
}
