import 'server-only';
import { FALLBACK_LANGUAGE } from '@/shared/localization/constants';
import { FALLBACK_THEME } from '@/shared/theme/constants';
import { cookies } from 'next/headers';
import { LanguageEnum } from '@/core/domain/value-objects/Language';
import { ThemeEnum } from '@/core/domain/value-objects/Theme';

export function getLangFromCookies(): LanguageEnum {
  return (cookies().get('lang')?.value ?? FALLBACK_LANGUAGE) as LanguageEnum;
}

export function getThemeFromCookies(): ThemeEnum {
  return (cookies().get('theme')?.value ?? FALLBACK_THEME) as ThemeEnum;
}
