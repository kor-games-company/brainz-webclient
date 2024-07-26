import { DevlopmentDictionary } from './DevelopmentDictionary';
import { LocalizationDictionary } from './LocalizationDictionary';
import { ThemeDictionary } from './ThemeDictionary';

export type Dictionary = {
  theme: ThemeDictionary;
  localization: LocalizationDictionary;
  development: DevlopmentDictionary;
};
