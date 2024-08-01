import { NextRequest, NextResponse } from 'next/server';
import { Language } from './localization/types';
import localizationMiddleware from './middleware/localization';
import themeMiddleware from './middleware/theme';
import { Theme } from './theme/types';

export type AppNextRequest = NextRequest & {
  lang?: Language;
  theme?: Theme;
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
