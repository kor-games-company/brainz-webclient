import { dictionaryByLang } from '@/localization/dictionaries/dictionaryByLang';
import { getLangFromCookies } from '@/utils/cookies/cookies.utils';
import getCurrentDictionary from '@/utils/localization/getCurrentDictionary';
import React from 'react';

export default function WorkshopPage() {
  const dictionary = getCurrentDictionary();

  return (
    <article>
      <h1>{dictionary.pages.workshop.name}</h1>
      <p></p>
    </article>
  );
}
