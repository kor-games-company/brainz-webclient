import { FALLBACK_LANGUAGE } from '@/localization/constants';
import { Language } from '@/localization/types';
import { FALLBACK_THEME } from '@/theme/constants';
import { Theme } from '@/theme/types';
import { cookies } from 'next/headers';

export function getLangFromCookies(): Language {
  return (cookies().get('lang')?.value ?? FALLBACK_LANGUAGE) as Language;
}

export function getThemeFromCookies(): Theme {
  return (cookies().get('theme')?.value ?? FALLBACK_THEME) as Theme;
}

export function setAccessTokenCookie(accessToken: string) {
  cookies().set('access', accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    path: '/',
    maxAge: 60 * 15,
  });
}

export function setRefreshTokenCookie(refreshToken: string) {
  cookies().set('refresh', refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    path: '/',
    maxAge: 60 * 60 * 24 * 7,
  });
}
