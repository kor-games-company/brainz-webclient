import Button from '@/app/_ui/buttons/Button';
import { auth, signOut } from '@/auth/auth';
import { dictionaryByLang } from '@/localization/dictionaries/dictionaryByLang';
import { getLangFromCookies } from '@/utils/cookies/cookies.utils';
import Link from 'next/link';
import React from 'react';

export default async function AuthSection() {
  const lang = getLangFromCookies();
  const dictionary = dictionaryByLang[lang].auth;
  const session = await auth();

  return session?.user ? (
    <div>
      <form
        action={async () => {
          'use server';
          await signOut();
        }}
      >
        <Button>{dictionary.signout}</Button>
      </form>
    </div>
  ) : (
    <div>
      <Link href="/signin">
        <Button>{dictionary.signin}</Button>
      </Link>
    </div>
  );
}
