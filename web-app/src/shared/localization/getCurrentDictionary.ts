import 'server-only';
import { getLangFromCookies } from '../utils/cookies.utils';
import { dictionaryByLang } from '@/shared/localization/dictionaries/dictionaryByLang';

export default function getCurrentDictionary() {
  const lang = getLangFromCookies();
  return dictionaryByLang[lang];
}
