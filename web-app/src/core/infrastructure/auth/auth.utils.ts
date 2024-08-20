import 'server-only';
import { getUserOrGuest } from './auth';
import { dictionaryByLang } from '@/shared/localization/dictionaries/dictionaryByLang';

export async function getUserOrGuestLanguage() {
  const authResult = await getUserOrGuest();
  if (authResult.isAuthorized) return authResult.user.getPreferredLanguage().getValue();
  else return authResult.guest.preferredLanguage;
}

export async function getUserOrGuestTheme() {
  const authResult = await getUserOrGuest();
  if (authResult.isAuthorized) return authResult.user.getPreferredTheme().getValue();
  else return authResult.guest.preferredTheme;
}

export async function getUserOrGuestDictionary() {
  const lang = await getUserOrGuestLanguage();
  return dictionaryByLang[lang];
}
