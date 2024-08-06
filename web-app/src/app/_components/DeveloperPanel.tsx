'use client';

import React from 'react';
import { useCookies } from 'react-cookie';
import { Theme } from '../../theme/types';
import { useRouter } from 'next/navigation';
import { IOption } from '../_ui/selectors/IOption';
import Select from '../_ui/selectors/Select';
import { Language } from '../../localization/types';
import useLocalization from '../_hooks/useLocalization';
import useTheme from '../_hooks/useTheme';

export default function DeveloperPanel() {
  const { dictionary } = useLocalization();
  return (
    <div className="absolute bottom-[100px] left-[100px] cursor-default select-none flex-col gap-2 rounded-md bg-secondary p-4 shadow-lg">
      <p className="self-center rounded-md bg-primary px-4 py-2">
        {dictionary.development.developerPanel}
      </p>
      <ThemeSwitcher />
      <LangSwitcher />
    </div>
  );
}

function ThemeSwitcher() {
  const { theme, changeTheme } = useTheme();
  const { dictionary } = useLocalization();

  const themeOptions: IOption<Theme>[] = [
    {
      label: dictionary.theme.light,
      value: 'light',
    },
    {
      label: dictionary.theme.dark,
      value: 'dark',
    },
  ];

  return (
    <div>
      <Select
        options={themeOptions}
        value={theme}
        onChange={changeTheme}
        label={dictionary.theme.theme}
      />
    </div>
  );
}

const langOptions: IOption<Language>[] = [
  {
    label: 'English',
    value: 'en',
  },
  {
    label: 'Русский',
    value: 'ru',
  },
];

function LangSwitcher() {
  const { dictionary, lang, changeLang } = useLocalization();

  return (
    <div>
      <Select
        options={langOptions}
        value={lang}
        onChange={changeLang}
        label={dictionary.localization.language}
      />
    </div>
  );
}
