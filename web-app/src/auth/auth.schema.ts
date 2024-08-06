import { dictionaryByLang } from '@/localization/dictionaries/dictionaryByLang';
import { Language } from '@/localization/types';
import interpolate from '@/utils/strings/interpolate';
import { z } from 'zod';

export function getAuthSchema(lang: Language) {
  const dictionary = dictionaryByLang[lang].schema;
  return z.object({
    email: z.string({ message: dictionary.string }).email({ message: dictionary.email }),
    password: z
      .string({ message: dictionary.string })
      .min(8, interpolate(dictionary.min, { value: String(8) })),
  });
}
