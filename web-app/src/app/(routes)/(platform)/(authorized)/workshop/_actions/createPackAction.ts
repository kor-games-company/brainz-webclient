'use server';

import getCurrentDictionary from '@/shared/localization/getCurrentDictionary';
import { buildCreatePackSchema } from '../../../../../../core/application/schemas/buildCreatePackSchema';
import { GameTypeEnum } from '@/core/domain/valueObjects/GameType';

export type CreatePackActionState = {
  errors?: {
    image?: string[] | undefined;
    name?: string[] | undefined;
    description?: string[] | undefined;
    language?: string[] | undefined;
  };
};

export default async function createPackAction(
  gameType: GameTypeEnum,
  prevState: CreatePackActionState | undefined,
  formData: FormData,
): Promise<CreatePackActionState | undefined> {
  const schema = buildCreatePackSchema(getCurrentDictionary());

  const image = formData.get('image') as File | null;
  const imageUrl = formData.get('imageUrl') as string | null;
  const name = formData.get('name') as string;
  const description = formData.get('description') as string;
  const language = formData.get('language') as string;

  const validationResult = schema.safeParse({ name, description, image, imageUrl, language });

  if (!validationResult.success) {
    const errors = validationResult.error.flatten().fieldErrors;
    return { errors };
  }
}
