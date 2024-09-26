import 'server-only';

import { getUser } from './auth';
import { dictionaryByLang } from '@/shared/localization/dictionaries/dictionaryByLang';
import { FALLBACK_LANGUAGE } from '@/core/domain/value-objects/Language';
import { FALLBACK_THEME } from '@/core/domain/value-objects/Theme';

export async function getCurrentUserTheme() {
  const user = await getUser();
  return user.getPreferredTheme()?.getValue() ?? FALLBACK_THEME;
}

export async function getCurrentUserLanguage() {
  const user = await getUser();
  return user.getPreferredLanguage()?.getValue() ?? FALLBACK_LANGUAGE;
}

export async function getCurrentUserDictionary() {
  const user = await getUser();
  const lang = user.getPreferredLanguage()?.getValue() ?? FALLBACK_LANGUAGE;
  return dictionaryByLang[lang];
}
