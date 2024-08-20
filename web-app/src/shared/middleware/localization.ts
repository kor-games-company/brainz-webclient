import { NextResponse } from 'next/server';
import { AppNextRequest } from '@/middleware';
import { LanguageEnum } from '@/core/domain/value-objects/Language';
import { FALLBACK_LANGUAGE, TRANSLATION_LANGUAGES } from '../localization/constants';

export default async function localizationMiddleware(req: AppNextRequest, res: NextResponse) {
  // TODO: After implementing authorization first priority will be to check user defined language
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
