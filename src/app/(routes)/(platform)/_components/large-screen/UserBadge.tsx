import { getUser, signOut } from '@/core/infrastructure/auth/auth';
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  MenuSection,
  MenuSeparator,
} from '@headlessui/react';
import ProfileIcon from '../ProfileIcon';
import { ArrowLeftStartOnRectangleIcon, Cog6ToothIcon, CogIcon } from '@heroicons/react/24/outline';
import UserBadgeNavLink from './UserBadgeNavLink';
import React from 'react';
import {
  getCurrentUserDictionary,
  getCurrentUserTheme,
} from '@/core/infrastructure/auth/auth.utils';
import { CreateBlobUrlUseCase } from '@/core/application/use-cases/CreateBlobUrlUseCase';

export default async function UserBadge() {
  const user = await getUser();

  if (!user.isAuthorized()) return null;

  const dictionary = await getCurrentUserDictionary();
  const userTheme = await getCurrentUserTheme();

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
    <Menu>
      <MenuButton>
        <div className="h-12 w-12 transition-opacity duration-200 hover:opacity-80">
          <ProfileIcon name={user.getDisplayName()} imageSrc={userImageUrl} />
        </div>
      </MenuButton>
      <MenuItems
        transition
        anchor="bottom"
        className={`theme-${userTheme} mt-6 origin-top rounded-md bg-secondary text-opposite shadow-lg transition duration-200 ease-out data-[closed]:opacity-0`}
      >
        <MenuSection className="cursor-default select-none px-4 pb-1 pt-2">
          <div className="flex h-16 items-center gap-2">
            <div className="h-10 w-10">
              <ProfileIcon name={user.getDisplayName()} imageSrc={userImageUrl} />
            </div>
            <div>
              <p>{user.getDisplayName()}</p>
              <p className="text-sm opacity-50">{user.getEmail()}</p>
            </div>
          </div>
        </MenuSection>
        <MenuSeparator className="my-1 h-px bg-opposite opacity-10" />
        <MenuSection>
          <MenuItem>
            <UserBadgeNavLink
              icon={<CogIcon className="h-6 w-6" />}
              label={dictionary.pages.workshop.name}
              href="/workshop"
            />
          </MenuItem>
          <MenuItem>
            <UserBadgeNavLink
              icon={<Cog6ToothIcon className="h-6 w-6" />}
              label={dictionary.pages.settings.name}
              href="/settings"
            />
          </MenuItem>
        </MenuSection>
        <MenuSeparator className="my-1 h-px bg-opposite opacity-10" />
        <MenuSection>
          <MenuItem>
            <form
              action={handleSignOut}
              className="mb-1 cursor-pointer p-2 pb-3 transition-colors duration-200 ease-linear hover:bg-opposite/20"
            >
              <button type="submit" className="flex h-full w-full items-center gap-2">
                <ArrowLeftStartOnRectangleIcon className="h-6 w-6" />
                <span>{dictionary.auth.signout}</span>
              </button>
            </form>
          </MenuItem>
        </MenuSection>
      </MenuItems>
    </Menu>
  );
}
