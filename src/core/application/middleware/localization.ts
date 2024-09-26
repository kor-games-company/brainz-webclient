import { NextResponse } from 'next/server';
import { AppNextRequest } from '@/middleware';
import {
  FALLBACK_LANGUAGE,
  LanguageEnum,
  TRANSLATION_LANGUAGES,
} from '@/core/domain/value-objects/Language';

export default async function localizationMiddleware(req: AppNextRequest, res: NextResponse) {
  const lang = req.cookies.get('lang');

  if (lang) {
    req.lang = lang.value as LanguageEnum;
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
    for (const supportedLang of TRANSLATION_LANGUAGES) {
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
