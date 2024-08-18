import { NextResponse } from 'next/server';
import { Language } from '../localization/types';
import { FALLBACK_LANGUAGE, SUPPORTED_LANGUAGES } from '../localization/constants';
import { AppNextRequest } from '@/middleware';

export default async function localizationMiddleware(req: AppNextRequest, res: NextResponse) {
  // TODO: After implementing authorization first priority will be to check user defined language
  const lang = req.cookies.get('lang');

  if (lang) {
    req.lang = lang.value as Language;
    return;
  }

  const acceptLanguage = req.headers.get('Accept-Language');
  if (!acceptLanguage) {
    req.lang = FALLBACK_LANGUAGE;
    res.cookies.set('lang', FALLBACK_LANGUAGE);
    return;
  }

  const acceptedLangs = acceptLanguage?.split(',');
  for (const acceptedLang of acceptedLangs) {
    for (const supportedLang of SUPPORTED_LANGUAGES) {
      if (acceptedLang.startsWith(supportedLang)) {
        req.lang = supportedLang;
        res.cookies.set('lang', supportedLang);
        return;
      }
    }
  }

  req.lang = FALLBACK_LANGUAGE;
  res.cookies.set('lang', FALLBACK_LANGUAGE);
}
