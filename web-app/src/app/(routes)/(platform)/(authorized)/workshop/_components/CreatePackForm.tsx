'use client';

import { Fieldset } from '@headlessui/react';
import React, { useActionState } from 'react';
import createPackAction from '../_actions/createPackAction';
import { GameType } from '@prisma/client';

type Props = {
  gameType: GameType;
};

export default function CreatePackForm({ gameType }: Props) {
  const createPackActionWithGameType = createPackAction.bind(null, gameType);
  const [_, formAction] = useActionState(createPackActionWithGameType, undefined);

  return (
    <form action={formAction}>
      <Fieldset></Fieldset>
    </form>
  );
}
