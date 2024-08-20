import { getUserOrGuest, signOut } from '@/core/infrastructure/auth/auth';
import React from 'react';
import ProfileIcon from '../ProfileIcon';
import { ArrowLeftStartOnRectangleIcon } from '@heroicons/react/24/outline';
import StyledButton from '@/app/_ui/styled/StyledButton';
import { getUserOrGuestDictionary } from '@/core/infrastructure/auth/auth.utils';

export default async function MobileSidebarUserBadge() {
  const authResult = await getUserOrGuest();
  if (!authResult.isAuthorized) return null;

  const dictionary = await getUserOrGuestDictionary();

  const handleSignOut = async () => {
    'use server';
    await signOut();
  };

  return (
    <div className="flex cursor-default select-none items-center justify-between px-6 py-4">
      <div className="flex items-center gap-4 overflow-hidden">
        <div className="h-10 w-10 flex-shrink-0">
          <ProfileIcon
            name={authResult.user.getDisplayName()}
            imageSrc={authResult.user.getImageUrl()}
          />
        </div>
        <p className="max-w-full truncate">{authResult.user.getDisplayName()}</p>
      </div>
      <form action={handleSignOut} className="flex-shrink-0">
        <StyledButton type="submit" className="flex h-full w-full items-center gap-2">
          <ArrowLeftStartOnRectangleIcon className="h-6 w-6" />
          <span>{dictionary.auth.signout}</span>
        </StyledButton>
      </form>
    </div>
  );
}
