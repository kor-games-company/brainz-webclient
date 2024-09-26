import { NextResponse } from 'next/server';
import { AppNextRequest } from '@/middleware';
import { FALLBACK_THEME, ThemeEnum } from '@/core/domain/value-objects/Theme';

export default async function themeMiddleware(req: AppNextRequest, res: NextResponse) {
  const theme = req.cookies.get('theme');

  if (theme) {
    req.theme = theme.value as ThemeEnum;
    return;
  }

  req.theme = FALLBACK_THEME;
  res.cookies.set('theme', FALLBACK_THEME);
}
