import 'server-only';
import { getLangFromCookies } from '../cookies/cookies.utils';
import { dictionaryByLang } from '@/localization/dictionaries/dictionaryByLang';

export default function getCurrentDictionary() {
  const lang = getLangFromCookies();
  return dictionaryByLang[lang];
}
