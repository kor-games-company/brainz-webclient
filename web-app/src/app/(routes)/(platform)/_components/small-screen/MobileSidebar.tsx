import React from 'react';
import {
  BookOpenIcon,
  Cog6ToothIcon,
  CogIcon,
  HomeIcon,
  PuzzlePieceIcon,
  ChatBubbleBottomCenterIcon,
} from '@heroicons/react/24/outline';
import { dictionaryByLang } from '@/localization/dictionaries/dictionaryByLang';
import { getLangFromCookies } from '@/utils/cookies/cookies.utils';
import { auth } from '@/auth/auth';
import Logo from '../Logo';
import NavLink from '../NavLink';
import MobileSidebarUserBadge from './MobileSidebarUserBadge';

export default async function MobileSidebar() {
  const lang = getLangFromCookies();
  const dictionary = dictionaryByLang[lang];
  const session = await auth();

  const links = [
    { href: '/', label: dictionary.navigation.home, icon: <HomeIcon className="h-6 w-6" /> },
    {
      href: '/play',
      label: dictionary.navigation.play,
      icon: <PuzzlePieceIcon className="h-6 w-6" />,
    },
    {
      href: '/library',
      label: dictionary.navigation.library,
      icon: <BookOpenIcon className="h-6 w-6" />,
    },
  ];

  if (session?.user) {
    links.push(
      {
        href: '/hub',
        label: dictionary.navigation.hub,
        icon: <ChatBubbleBottomCenterIcon className="h-6 w-6" />,
      },
      {
        href: '/workshop',
        label: dictionary.navigation.workshop,
        icon: <CogIcon className="h-6 w-6" />,
      },
      {
        href: '/settings',
        label: dictionary.navigation.settings,
        icon: <Cog6ToothIcon className="h-6 w-6" />,
      },
    );
  }

  return (
    <div className="flex h-full flex-col justify-between gap-8">
      <div className="h-[10%} my-4 self-center">
        <Logo />
      </div>
      <div className="flex-1 px-2">
        <nav>
          <ul>
            {links.map((link) => {
              return (
                <li key={link.href}>
                  <NavLink href={link.href} className="flex items-center gap-4 rounded-md p-4">
                    {link.icon}
                    <span>{link.label}</span>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      <div>
        <MobileSidebarUserBadge />
      </div>
    </div>
  );
}
