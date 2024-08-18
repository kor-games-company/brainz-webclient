'use client';

import { Field, Fieldset, Label, Legend } from '@headlessui/react';
import React, { useActionState } from 'react';
import createPackAction from '../../../_actions/createPackAction';
import { GameType } from '@prisma/client';
import StyledInput from '@/app/_ui/styled/StyledInput';
import StyledTextarea from '@/app/_ui/styled/StyledTextarea';
import useLocalization from '@/app/_hooks/useLocalization';
import StyledButton from '@/app/_ui/styled/StyledButton';
import { useRouter } from 'next/navigation';

type Props = {
  gameType: GameType;
};

export default function CreatePackForm({ gameType }: Props) {
  const {
    dictionary: {
      pages: { workshop: workshopDictionary },
    },
  } = useLocalization();
  const router = useRouter();

  const createPackActionWithGameType = createPackAction.bind(null, gameType);
  const [_, formAction, pending] = useActionState(createPackActionWithGameType, undefined);

  const handleClickBack = () => {
    router.back();
  };

  return (
    <form action={formAction}>
      <Fieldset className="flex flex-col gap-6 rounded-md" disabled={pending}>
        <Legend className="text-xl font-medium">
          {workshopDictionary.createPackFieldsetLegend}
        </Legend>
        <div className="flex flex-col gap-6 xl:flex-row">
          <div className="flex flex-col gap-6 xl:w-3/5">
            <Field className="flex flex-col">
              <Label>{workshopDictionary.createPackFieldLabel}</Label>
              <StyledInput name="name" />
            </Field>
            <Field className="flex flex-col">
              <Label>{workshopDictionary.createPackFieldDescription}</Label>
              <StyledTextarea name="description" rows={5} />
            </Field>
          </div>
          <div className="xl:w-2/5">
            <Field className="flex flex-col">
              <Label>{workshopDictionary.createPackFieldImage}</Label>
              <StyledTextarea name="imageUrl" rows={5} />
            </Field>
          </div>
        </div>
        <div className="flex gap-6">
          <StyledButton variant="outlined" className="flex-1" onClick={handleClickBack}>
            Back
          </StyledButton>
          <StyledButton type="submit" className="flex-1">
            Create
          </StyledButton>
        </div>
      </Fieldset>
    </form>
  );
}
