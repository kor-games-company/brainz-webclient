import { DevlopmentDictionary } from './DevelopmentDictionary';
import { LocalizationDictionary } from './LocalizationDictionary';
import { ThemeDictionary } from './ThemeDictionary';
import { MetadataDictionary } from './MetadataDictionary';
import { AuthDictionary } from './AuthDictionary';
import { ErrorsDictionary } from './ErrorsDictionary';
import { SchemaValidationDictionary } from './SchemaValidationDictionary';
import { HomeDictionary } from './pages/HomeDictionary';
import { HubDictionary } from './pages/HubDictionary';
import { LibraryDictionary } from './pages/LibraryDictionary';
import { PlayDictionary } from './pages/PlayDictionary';
import { SettingsDictionary } from './pages/SettingsDictionary';
import { WorkshopDictionary } from './pages/WorkshopDictionary';

export type Dictionary = {
  theme: ThemeDictionary;
  localization: LocalizationDictionary;
  development: DevlopmentDictionary;
  metadata: MetadataDictionary;
  auth: AuthDictionary;
  errors: ErrorsDictionary;
  schema: SchemaValidationDictionary;
  pages: {
    home: HomeDictionary;
    hub: HubDictionary;
    library: LibraryDictionary;
    play: PlayDictionary;
    settings: SettingsDictionary;
    workshop: WorkshopDictionary;
  };
};
