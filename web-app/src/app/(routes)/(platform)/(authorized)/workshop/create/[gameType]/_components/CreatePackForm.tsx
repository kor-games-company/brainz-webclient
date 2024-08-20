'use client';

import { Field, Fieldset, Label, Legend } from '@headlessui/react';
import React, { useActionState } from 'react';
import createPackAction from '../../../_actions/createPackAction';
import StyledInput from '@/app/_ui/styled/StyledInput';
import StyledTextarea from '@/app/_ui/styled/StyledTextarea';
import useLocalization from '@/app/_hooks/useLocalization';
import StyledButton from '@/app/_ui/styled/StyledButton';
import { useRouter } from 'next/navigation';
import StyledSelect, { IOption } from '@/app/_ui/styled/StyledSelect';
import { LanguageEnum } from '@/core/domain/value-objects/Language';
import { GameTypeEnum } from '@/core/domain/value-objects/GameType';

type Props = {
  gameType: GameTypeEnum;
};

export default function CreatePackForm({ gameType }: Props) {
  const {
    dictionary: {
      pages: { workshop: workshopDictionary },
      localization: localizationDictionary,
    },
  } = useLocalization();
  const router = useRouter();

  const createPackActionWithGameType = createPackAction.bind(null, gameType);
  const [_, formAction, pending] = useActionState(createPackActionWithGameType, undefined);

  const handleClickBack = () => {
    router.back();
  };

  const languageOptions: IOption<LanguageEnum>[] = [
    {
      label: localizationDictionary[LanguageEnum.en],
      value: LanguageEnum.en,
    },
    {
      label: localizationDictionary[LanguageEnum.ru],
      value: LanguageEnum.ru,
    },
  ];

  return (
    <form action={formAction}>
      <Fieldset className="flex flex-col gap-6 rounded-md" disabled={pending}>
        <Legend>
          <h3 className="text-xl font-medium">{workshopDictionary.createPackFieldsetLegend}</h3>
          <p className="text-sm text-opposite-secondary">Example description</p>
        </Legend>
        <div className="flex flex-col gap-6 xl:flex-row">
          <div className="flex flex-col gap-6 xl:w-3/5">
            <Field className="flex flex-col">
              <Label>{workshopDictionary.createPackFieldLabel}</Label>
              <StyledInput name="name" />
            </Field>
            <Field className="flex flex-col">
              <Label>Select language</Label>
              <StyledSelect name="language" options={languageOptions} />
            </Field>
            <Field className="flex flex-col">
              <Label>{workshopDictionary.createPackFieldDescription}</Label>
              <StyledTextarea name="description" rows={8} className="resize-none" />
            </Field>
          </div>
          <div className="xl:w-2/5">
            <Field className="flex flex-col">
              <Label>{workshopDictionary.createPackFieldImage}</Label>
              <StyledTextarea name="imageUrl" rows={5} />
            </Field>
          </div>
        </div>
        <div className="flex gap-6 xl:justify-center">
          <StyledButton
            variant="outlined"
            className="flex-1 xl:w-28 xl:flex-none"
            onClick={handleClickBack}
          >
            Back
          </StyledButton>
          <StyledButton type="submit" className="flex-1 xl:w-28 xl:flex-none">
            Create
          </StyledButton>
        </div>
      </Fieldset>
    </form>
  );
}
