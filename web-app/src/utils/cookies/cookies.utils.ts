import 'server-only';
import { FALLBACK_LANGUAGE } from '@/localization/constants';
import { FALLBACK_THEME } from '@/theme/constants';
import { Theme } from '@/theme/types';
import { cookies } from 'next/headers';
import { Language } from '@/domain/common/Language';

export function getLangFromCookies(): Language {
  return (cookies().get('lang')?.value ?? FALLBACK_LANGUAGE) as Language;
}

export function getThemeFromCookies(): Theme {
  return (cookies().get('theme')?.value ?? FALLBACK_THEME) as Theme;
}
