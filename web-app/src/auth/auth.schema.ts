import { dictionaryByLang } from '@/localization/dictionaries/dictionaryByLang';
import { Language } from '@/localization/types';
import getCurrentDictionary from '@/utils/localization/getCurrentDictionary';
import interpolate from '@/utils/strings/interpolate';
import { z } from 'zod';

export function getAuthSchema(lang: Language) {
  const dictionary = getCurrentDictionary();

  return z.object({
    email: z
      .string({ message: dictionary.schema.string })
      .email({ message: dictionary.schema.email }),
  });
}
