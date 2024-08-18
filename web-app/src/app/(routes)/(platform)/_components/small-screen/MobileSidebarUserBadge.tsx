import { auth, signOut } from '@/auth/auth';
import React from 'react';
import ProfileIcon from '../ProfileIcon';
import { ArrowLeftStartOnRectangleIcon } from '@heroicons/react/24/outline';
import getCurrentDictionary from '@/utils/localization/getCurrentDictionary';
import StyledButton from '@/app/_ui/styled/StyledButton';

export default async function MobileSidebarUserBadge() {
  const session = await auth();
  if (!session?.user) return null;

  const dictionary = getCurrentDictionary();

  const userName = session.user.name ?? session.user.email ?? 'Unknown';

  const handleSignOut = async () => {
    'use server';
    await signOut();
  };

  return (
    <div className="flex cursor-default select-none items-center justify-between px-6 py-4">
      <div className="flex items-center gap-4 overflow-hidden">
        <div className="h-10 w-10 flex-shrink-0">
          <ProfileIcon name={userName} imageSrc={session.user.image} />
        </div>
        <p className="max-w-full truncate">{userName}</p>
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
