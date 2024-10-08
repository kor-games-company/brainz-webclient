'use client';

import React from 'react';
import useLocalization from '../_hooks/useLocalization';
import useTheme from '../_hooks/useTheme';
import StyledSelect, { IOption } from '../_ui/styled/StyledSelect';
import { Field, Fieldset, Label, Legend } from '@headlessui/react';
import { ThemeEnum } from '@/core/domain/value-objects/Theme';
import { LanguageEnum } from '@/core/domain/value-objects/Language';

export default function DeveloperPanel() {
  const { dictionary } = useLocalization();
  return (
    <Fieldset className="cursor-default select-none flex-col gap-2 rounded-md bg-secondary p-4 shadow-lg">
      <Legend className="self-center rounded-md bg-primary px-4 py-2">
        {dictionary.development.developerPanel}
      </Legend>
      <ThemeSwitcher />
      <LangSwitcher />
    </Fieldset>
  );
}

function ThemeSwitcher() {
  const { theme, changeTheme } = useTheme();
  const { dictionary } = useLocalization();

  const themeOptions: IOption<ThemeEnum>[] = [
    {
      label: dictionary.theme.light,
      value: ThemeEnum.light,
    },
    {
      label: dictionary.theme.dark,
      value: ThemeEnum.dark,
    },
  ];

  return (
    <Field>
      <Label className="pl-1 text-xs">{dictionary.theme.theme}</Label>
      <StyledSelect options={themeOptions} value={theme} onChange={changeTheme} />
    </Field>
  );
}

const langOptions: IOption<LanguageEnum>[] = [
  {
    label: 'English',
    value: LanguageEnum.en,
  },
  {
    label: 'Русский',
    value: LanguageEnum.ru,
  },
];

function LangSwitcher() {
  const { dictionary, lang, changeLang } = useLocalization();

  return (
    <Field>
      <Label className="pl-1 text-xs">{dictionary.localization.language}</Label>
      <StyledSelect options={langOptions} value={lang} onChange={changeLang} />
    </Field>
  );
}
