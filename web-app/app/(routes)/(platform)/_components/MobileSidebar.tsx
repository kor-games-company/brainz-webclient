import React from 'react';
import Logo from './Logo';
import NavLink from './NavLink';
import { BookOpenIcon, HomeIcon } from '@heroicons/react/24/outline';
import { ChatBubbleBottomCenterIcon } from '@heroicons/react/24/outline';
import { getLangFromCookies } from '@/app/utils/cookies/cookies.functions';
import { dictionaryByLang } from '@/app/localization/dictionaries/dictionaryByLang';

export default function MobileSidebar() {
  const lang = getLangFromCookies();
  const dictionary = dictionaryByLang[lang];

  const links = [
    { href: '/', label: dictionary.navigation.home, icon: <HomeIcon className="h-6 w-6" /> },
    {
      href: '/library',
      label: dictionary.navigation.library,
      icon: <BookOpenIcon className="h-6 w-6" />,
    },
    {
      href: '/hub',
      label: dictionary.navigation.hub,
      icon: <ChatBubbleBottomCenterIcon className="h-6 w-6" />,
    },
  ];

  return (
    <div className="flex h-full flex-col gap-8">
      <div className="my-4 self-center">
        <Logo />
      </div>
      <div className="px-2">
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
    </div>
  );
}
