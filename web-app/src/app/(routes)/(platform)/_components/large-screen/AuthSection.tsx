import StyledButton from '@/app/_ui/styled/StyledButton';
import { auth, signOut } from '@/auth/auth';
import { dictionaryByLang } from '@/localization/dictionaries/dictionaryByLang';
import { getLangFromCookies } from '@/utils/cookies/cookies.utils';
import { Button } from '@headlessui/react';
import Link from 'next/link';
import React from 'react';

export default async function AuthSection() {
  const lang = getLangFromCookies();
  const dictionary = dictionaryByLang[lang].auth;
  const session = await auth();

  const handleSignOut = async () => {
    'use server';
    await signOut();
  };

  return session?.user ? (
    <div>
      <form action={handleSignOut}>
        <StyledButton type="submit">{dictionary.signout}</StyledButton>
      </form>
    </div>
  ) : (
    <div>
      <Link href="/signin">
        <StyledButton>{dictionary.signin}</StyledButton>
      </Link>
    </div>
  );
}
