import Button from '@/app/_ui/buttons/Button';
import { dictionaryByLang } from '@/localization/dictionaries/dictionaryByLang';
import { getLangFromCookies } from '@/utils/cookies/cookies.utils';
import Link from 'next/link';
import React from 'react';

export default function AuthSection() {
  const lang = getLangFromCookies();
  const dictionary = dictionaryByLang[lang].auth;
  return (
    <div>
      <Link href="/signup">
        <Button>{dictionary.signup}</Button>
      </Link>
    </div>
  );
}
