import { getUserOrGuest, signOut } from '@/core/infrastructure/auth/auth';
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
import { getUserOrGuestDictionary } from '@/core/infrastructure/auth/auth.utils';

export default async function UserBadge() {
  const authResult = await getUserOrGuest();

  if (!authResult.isAuthorized) return null;

  const dictionary = await getUserOrGuestDictionary();

  const handleSignOut = async () => {
    'use server';
    await signOut();
  };

  return (
    <Menu>
      <MenuButton>
        <div className="h-12 w-12 transition-opacity duration-200 hover:opacity-80">
          <ProfileIcon
            name={authResult.user.getDisplayName()}
            imageSrc={authResult.user.getImageUrl()}
          />
        </div>
      </MenuButton>
      <MenuItems
        transition
        anchor="bottom"
        className={`theme-${authResult.user.getPreferredTheme().getValue()} mt-6 origin-top rounded-md bg-secondary text-opposite shadow-lg transition duration-200 ease-out data-[closed]:opacity-0`}
      >
        <MenuSection className="cursor-default select-none px-4 pb-1 pt-2">
          <div className="flex h-16 items-center gap-2">
            <div className="h-10 w-10">
              <ProfileIcon
                name={authResult.user.getDisplayName()}
                imageSrc={authResult.user.getImageUrl()}
              />
            </div>
            <div>
              <p>{authResult.user.getDisplayName()}</p>
              <p className="text-sm opacity-50">{authResult.user.getEmail()}</p>
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
