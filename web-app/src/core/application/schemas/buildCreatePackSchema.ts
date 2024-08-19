import { Language } from '@/core/domain/localization/Language';
import { Dictionary } from '@/shared/localization/dictionaries/Dictionary';
import interpolate from '@/shared/utils/strings/interpolate';
import { z } from 'zod';

export function buildCreatePackSchema(dictionary: Dictionary) {
  const schemaDictionary = dictionary.schema;

  const minLengthError = (val: number) =>
    interpolate(schemaDictionary.minLength, { arg1: String(val) });
  const maxLengthError = (val: number) =>
    interpolate(schemaDictionary.maxLength, { arg1: String(val) });
  const languageEnumError = interpolate(schemaDictionary.maxLength, {
    arg1: dictionary.localization.language,
  });

  return z
    .object({
      name: z
        .string({ message: schemaDictionary.string })
        .min(4, minLengthError(4))
        .max(64, maxLengthError(64)),
      description: z
        .string({ message: schemaDictionary.string })
        .min(16, minLengthError(16))
        .max(512, maxLengthError(512)),
      language: z.nativeEnum(Language, { message: languageEnumError }),
      image: z.instanceof(File).optional(),
      imageUrl: z.string().url().optional(),
    })
    .refine((data) => data.image || data.imageUrl, {
      message: schemaDictionary.image,
      path: ['image'],
    });
}
