import { auth, signOut } from '@/auth/auth';
import { THEMES_COLORS } from '@/theme/constants';
import { getLangFromCookies, getThemeFromCookies } from '@/utils/cookies/cookies.utils';
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  MenuSection,
  MenuSeparator,
} from '@headlessui/react';
import { PencilIcon } from '@heroicons/react/20/solid';
import React from 'react';
import Image from 'next/image';
import ProfileIcon from '../ProfileIcon';
import { dictionaryByLang } from '@/localization/dictionaries/dictionaryByLang';
import Link from 'next/link';
import { ArrowLeftStartOnRectangleIcon, Cog6ToothIcon, CogIcon } from '@heroicons/react/24/outline';
import UserBadgeNavLink from './UserBadgeNavLink';
import getCurrentDictionary from '@/utils/localization/getCurrentDictionary';

export default async function UserBadge() {
  const session = await auth();

  if (!session?.user) return null;

  const userName = session.user.name ?? session.user.email ?? 'Unknown';

  const dictionary = getCurrentDictionary();

  const theme = getThemeFromCookies();
  const colors = THEMES_COLORS[theme];

  const handleSignOut = async () => {
    'use server';
    await signOut();
  };

  return (
    <Menu>
      <MenuButton>
        <div className="h-12 w-12 transition-opacity duration-200 hover:opacity-80">
          <ProfileIcon name={userName} imageSrc={session.user.image} />
        </div>
      </MenuButton>
      <MenuItems
        transition
        anchor="bottom"
        className={`theme-${theme} mt-6 origin-top rounded-md bg-secondary text-opposite shadow-lg transition duration-200 ease-out data-[closed]:opacity-0`}
      >
        <MenuSection className="cursor-default select-none px-4 pb-1 pt-2">
          <div className="flex h-16 items-center gap-2">
            <div className="h-10 w-10">
              <ProfileIcon name={userName} imageSrc={session.user.image} />
            </div>
            <div>
              <p>{userName}</p>
              <p className="text-sm opacity-50">{session.user.email}</p>
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
