'use client';

import React from 'react';
import { useCookies } from 'react-cookie';
import { Theme } from '../theme/types';
import { useRouter } from 'next/navigation';
import { IOption } from '../ui/selectors/IOption';
import Select from '../ui/selectors/Select';
import { Language } from '../localization/types';
import useLocalization from '../hooks/useLocalization';
import useTheme from '../hooks/useTheme';

export default function DeveloperSettings() {
  const { dictionary } = useLocalization();
  return (
    <div className="absolute bottom-[100px] left-[100px] z-50 cursor-default select-none flex-col gap-2 rounded-md bg-secondary p-4 shadow-lg">
      <p className="self-center rounded-md bg-primary px-4 py-2">
        {dictionary.development.developerPanel}
      </p>
      <ThemeSwitcher />
      <LangSwitcher />
    </div>
  );
}

function ThemeSwitcher() {
  const [cookies, setCookies] = useCookies();
  const router = useRouter();
  const { theme } = useTheme();
  const { dictionary } = useLocalization();

  const handleChangeTheme = (theme: Theme) => {
    setCookies('theme', theme);
    router.refresh();
  };

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
        onChange={handleChangeTheme}
        label={dictionary.theme.theme}
      />
    </div>
  );
}

function LangSwitcher() {
  const [cookies, setCookies] = useCookies();
  const router = useRouter();
  const { dictionary, lang } = useLocalization();

  const handleChangeLang = (lang: Language) => {
    setCookies('lang', lang);
    router.refresh();
  };

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

  return (
    <div>
      <Select
        options={langOptions}
        value={lang}
        onChange={handleChangeLang}
        label={dictionary.localization.language}
      />
    </div>
  );
}
