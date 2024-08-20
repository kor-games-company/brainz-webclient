import StyledTooltip from '@/app/_ui/styled/StyledTooltip';
import { getUserOrGuestDictionary } from '@/core/infrastructure/auth/auth.utils';
import clsx from 'clsx';
import React from 'react';

type Props = {
  title: string;
  image: JSX.Element;
  comingSoon?: boolean;
};

export default async function CreatePackCard({ title, image, comingSoon = false }: Props) {
  const workshopDictionary = (await getUserOrGuestDictionary()).pages.workshop;

  return (
    <div
      className={clsx(
        'flex items-center gap-4 rounded-md bg-background p-4 transition-all duration-200 xl:flex-col xl:gap-2 xl:p-6',
        {
          'cursor-pointer hover:opacity-90 xl:hover:p-4': !comingSoon,
          'cursor-not-allowed opacity-70': comingSoon,
        },
      )}
      data-tooltip-id={comingSoon ? 'tooltip-coming-soon' : undefined}
    >
      <div className="w-36 overflow-hidden rounded-md xl:w-fit">{image}</div>
      <p className="max-w-[40%] xl:max-w-fit">{title}</p>
      {comingSoon && (
        <StyledTooltip id="tooltip-coming-soon">{workshopDictionary.inDevelopment}</StyledTooltip>
      )}
    </div>
  );
}
