import 'server-only';
import { FALLBACK_LANGUAGE } from '@/shared/localization/constants';
import { FALLBACK_THEME } from '@/shared/theme/constants';
import { Theme } from '@/shared/theme/types';
import { cookies } from 'next/headers';
import { LanguageEnum } from '@/core/domain/value-objects/Language';

export function getLangFromCookies(): LanguageEnum {
  return (cookies().get('lang')?.value ?? FALLBACK_LANGUAGE) as LanguageEnum;
}

export function getThemeFromCookies(): Theme {
  return (cookies().get('theme')?.value ?? FALLBACK_THEME) as Theme;
}
