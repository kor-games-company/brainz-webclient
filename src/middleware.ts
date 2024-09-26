import { NextRequest, NextResponse } from 'next/server';
import { LanguageEnum } from './core/domain/value-objects/Language';
import { ThemeEnum } from './core/domain/value-objects/Theme';
import localizationMiddleware from './core/application/middleware/localization';
import themeMiddleware from './core/application/middleware/theme';
import guestMiddleware from './core/application/middleware/guest';

export type AppNextRequest = NextRequest & {
  lang?: LanguageEnum;
  theme?: ThemeEnum;
  guestName?: string;
};

export default async function middleware(req: AppNextRequest) {
  const response = NextResponse.next();
  localizationMiddleware(req, response);
  themeMiddleware(req, response);
  guestMiddleware(req, response);
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
