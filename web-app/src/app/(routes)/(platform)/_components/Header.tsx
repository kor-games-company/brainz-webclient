import React from 'react';
import Logo from './Logo';
import Link from 'next/link';
import NavLink from './NavLink';
import Button from '@/app/_ui/buttons/Button';
import {
  BookOpenIcon,
  CogIcon,
  PuzzlePieceIcon,
  ChatBubbleBottomCenterIcon,
} from '@heroicons/react/24/outline';
import { dictionaryByLang } from '@/localization/dictionaries/dictionaryByLang';
import { getLangFromCookies } from '@/utils/cookies/cookies.functions';

export default function Header() {
  const lang = getLangFromCookies();
  const dictionary = dictionaryByLang[lang];

  const links = [
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
    {
      href: '/hub',
      label: dictionary.navigation.hub,
      icon: <ChatBubbleBottomCenterIcon className="h-6 w-6" />,
    },
  ];

  return (
    <header className="flex items-center justify-between bg-secondary px-32 py-4 shadow-sm shadow-black/30">
      <div>
        <Logo />
      </div>
      <div>
        <nav>
          <ul className="flex gap-2">
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
        <Link href="/signup">
          <Button>Sign Up</Button>
        </Link>
      </div>
    </header>
  );
}
