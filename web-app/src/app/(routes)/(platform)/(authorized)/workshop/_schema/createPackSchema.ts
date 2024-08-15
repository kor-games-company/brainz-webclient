import { Dictionary } from '@/localization/dictionaries/Dictionary';
import getCurrentDictionary from '@/utils/localization/getCurrentDictionary';
import interpolate from '@/utils/strings/interpolate';
import { z } from 'zod';

export function createPackSchema(dictionary: Dictionary) {
  const schemaDictionary = dictionary.schema;

  const minLengthError = (val: number) =>
    interpolate(schemaDictionary.minLength, { arg1: String(val) });
  const maxLengthError = (val: number) =>
    interpolate(schemaDictionary.maxLength, { arg1: String(val) });

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
      image: z.instanceof(File).optional(),
      imageUrl: z.string().url().optional(),
    })
    .refine((data) => data.image || data.imageUrl, {
      message: schemaDictionary.image,
      path: ['image'],
    });
}
