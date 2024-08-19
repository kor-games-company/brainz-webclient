import getCurrentDictionary from '@/shared/utils/localization/getCurrentDictionary';
import { ArrowUturnLeftIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React from 'react';

export default function BackToWorkshopLink() {
  const workshopDictionary = getCurrentDictionary().pages.workshop;
  return (
    <Link
      href={'/workshop'}
      className="flex w-fit items-center gap-2 underline transition-colors duration-200 hover:text-opposite-secondary"
    >
      <ArrowUturnLeftIcon className="h-6 w-6" />
      <span>{workshopDictionary.returnToWorkshop}</span>
    </Link>
  );
}
