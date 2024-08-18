'use server';

import getCurrentDictionary from '@/utils/localization/getCurrentDictionary';
import { GameType } from '@prisma/client';
import { createPackSchema } from '../_schema/createPackSchema';

export type CreatePackActionState = {
  errors?: {
    image?: string[] | undefined;
    name?: string[] | undefined;
    description?: string[] | undefined;
  };
};

export default async function createPackAction(
  gameType: GameType,
  prevState: CreatePackActionState | undefined,
  formData: FormData,
): Promise<CreatePackActionState | undefined> {
  const schema = createPackSchema(getCurrentDictionary());

  const image = formData.get('image') as File | null;
  const imageUrl = formData.get('imageUrl') as string | null;
  const name = formData.get('name') as string;
  const description = formData.get('description') as string;

  const validationResult = schema.safeParse({ name, description, image, imageUrl });

  if (!validationResult.success) {
    const errors = validationResult.error.flatten().fieldErrors;
    return { errors };
  }
}
