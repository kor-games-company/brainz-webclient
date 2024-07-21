import { NextRequest, NextResponse } from 'next/server';
import localizationMiddleware from './app/middleware/localization';
import { Language } from './app/localization/types';
import { Theme } from './app/theme/types';
import themeMiddleware from './app/middleware/theme';

export type AppNextRequest = NextRequest & {
  lang?: Language;
  theme?: Theme;
};

export async function middleware(req: AppNextRequest) {
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
