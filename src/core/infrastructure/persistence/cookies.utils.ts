import 'server-only';

import { cookies } from 'next/headers';
import { FALLBACK_LANGUAGE, LanguageEnum } from '@/core/domain/value-objects/Language';
import { FALLBACK_THEME, ThemeEnum } from '@/core/domain/value-objects/Theme';

export function getLangFromCookies(): LanguageEnum {
  return (cookies().get('lang')?.value ?? FALLBACK_LANGUAGE) as LanguageEnum;
}

export function getThemeFromCookies(): ThemeEnum {
  return (cookies().get('theme')?.value ?? FALLBACK_THEME) as ThemeEnum;
}

export function getGuestNameFromCookies(): string {
  return cookies().get('guestName')?.value ?? 'Guest';
}
