import { NextRequest, NextResponse } from 'next/server';
import { Language, LanguageEnum } from './core/domain/value-objects/Language';
import { Theme, ThemeEnum } from './core/domain/value-objects/Theme';
import localizationMiddleware from './shared/middleware/localization';
import themeMiddleware from './shared/middleware/theme';

export type AppNextRequest = NextRequest & {
  lang?: LanguageEnum;
  theme?: ThemeEnum;
};

export default async function middleware(req: AppNextRequest) {
  const response = NextResponse.next();
  localizationMiddleware(req, response);
  themeMiddleware(req, response);
  return response;
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next).*)',
    // Optional: only run on root (/) URL
    // '/'
  ],
};
