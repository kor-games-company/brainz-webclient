import { NextResponse } from 'next/server';
import { AppNextRequest } from '@/middleware';
import { ThemeEnum } from '@/core/domain/value-objects/Theme';
import { FALLBACK_THEME } from '../theme/constants';

export default async function themeMiddleware(req: AppNextRequest, res: NextResponse) {
  // TODO: After implementing authorization first priority will be to check user defined theme
  const theme = req.cookies.get('theme');

  if (theme) {
    req.theme = theme.value as ThemeEnum;
    return;
  }

  req.theme = FALLBACK_THEME;
  res.cookies.set('theme', FALLBACK_THEME);
}
