import React from 'react';
import Logo from '../Logo';
import Link from 'next/link';
import NavLink from '../NavLink';
import {
  BookOpenIcon,
  PuzzlePieceIcon,
  ChatBubbleBottomCenterIcon,
} from '@heroicons/react/24/outline';
import UserBadge from './UserBadge';
import { auth } from '@/auth/auth';
import StyledButton from '@/app/_ui/styled/StyledButton';
import getCurrentDictionary from '@/utils/localization/getCurrentDictionary';

export default async function Header() {
  const dictionary = getCurrentDictionary();
  const session = await auth();

  const links = [
    {
      href: '/play',
      label: dictionary.pages.play.name,
      icon: <PuzzlePieceIcon className="h-6 w-6" />,
    },
    {
      href: '/library',
      label: dictionary.pages.library.name,
      icon: <BookOpenIcon className="h-6 w-6" />,
    },
  ];

  if (session?.user) {
    links.push({
      href: '/hub',
      label: dictionary.pages.hub.name,
      icon: <ChatBubbleBottomCenterIcon className="h-6 w-6" />,
    });
  }

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
      <div className="flex items-center gap-4">
        {session?.user ? (
          <UserBadge />
        ) : (
          <Link href="/signin">
            <StyledButton>{dictionary.auth.signin}</StyledButton>
          </Link>
        )}
      </div>
    </header>
  );
}
