import { DevlopmentDictionary } from './DevelopmentDictionary';
import { LocalizationDictionary } from './LocalizationDictionary';
import { NavigationDictionary } from './NavigationDictionary';
import { ThemeDictionary } from './ThemeDictionary';
import { MetadataDictionary } from './MetadataDictionary';
import { AuthDictionary } from './AuthDictionary';
import { ErrorsDictionary } from './ErrorsDictionary';
import { SchemaDictionary } from './SchemaDictionary';

export type Dictionary = {
  theme: ThemeDictionary;
  localization: LocalizationDictionary;
  development: DevlopmentDictionary;
  navigation: NavigationDictionary;
  metadata: MetadataDictionary;
  auth: AuthDictionary;
  errors: ErrorsDictionary;
  schema: SchemaDictionary;
};
