import { getUser, signOut } from '@/core/infrastructure/auth/auth';
import React from 'react';
import ProfileIcon from '../ProfileIcon';
import { ArrowLeftStartOnRectangleIcon } from '@heroicons/react/24/outline';
import StyledButton from '@/app/_ui/styled/StyledButton';
import { getCurrentUserDictionary } from '@/core/infrastructure/auth/auth.utils';
import { CreateBlobUrlUseCase } from '@/core/application/use-cases/CreateBlobUrlUseCase';

export default async function MobileSidebarUserBadge() {
  const user = await getUser();
  if (!user.isAuthorized()) return null;

  const dictionary = await getCurrentUserDictionary();

  const handleSignOut = async () => {
    'use server';
    await signOut();
  };

  let userImageUrl: string | undefined;
  const userImageLocation = user.getImageLocation();
  if (userImageLocation) {
    const createUrlUseCase = new CreateBlobUrlUseCase();
    const imageUrlResult = await createUrlUseCase.execute({ blobLocation: userImageLocation });
    if (imageUrlResult.isOk()) {
      userImageUrl = imageUrlResult.getValue();
    }
  }

  return (
    <div className="flex cursor-default select-none items-center justify-between px-6 py-4">
      <div className="flex items-center gap-4 overflow-hidden">
        <div className="h-10 w-10 flex-shrink-0">
          <ProfileIcon name={user.getDisplayName()} imageSrc={userImageUrl} />
        </div>
        <p className="max-w-full truncate">{user.getDisplayName()}</p>
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
