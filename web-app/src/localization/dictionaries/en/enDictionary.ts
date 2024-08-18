import { Dictionary } from '../Dictionary';

export const enDictionary: Dictionary = {
  theme: {
    theme: 'Theme',
    dark: 'Dark',
    light: 'Light',
  },
  localization: {
    language: 'Language',
    en: 'English',
    ru: 'Russian',
  },
  development: {
    developerPanel: 'Developer Panel',
  },
  metadata: {
    rootDescription: 'Have fun with your friends!',
  },
  auth: {
    signin: 'Sign In',
    signout: 'Sign Out',
    email: 'Email',
    continueWithoutSigning: 'Continue without signing in',
  },
  errors: {
    database: 'Error accessing database',
    error: 'Error',
  },
  schema: {
    string: 'Field should not be empty',
    minLength: 'Field length should be more or equal to {arg1}',
    maxLength: 'Field length should be less or equal to {arg1}',
    image: 'Image should be specified',
  },
  pages: {
    home: { name: 'Home' },
    play: { name: 'Play' },
    library: { name: 'Library' },
    hub: { name: 'Hub' },
    workshop: {
      name: 'Workshop',
      description: 'Here you can create your own packs to play with your friends',
      createGameTitle: 'Create your game',
      createGameDescription: 'Choose what game type you want to create',
      createSlotsPack: 'New Slots game',
      createTerritoryPack: 'New Territory game',
      createQuizPack: 'New Quiz',
      inDevelopment: 'In development...',
      returnToWorkshop: 'Back to workshop',
      createPackFieldsetLegend: 'Create game pack',
      createPackFieldLabel: 'Game pack name',
      createPackFieldDescription: 'Game pack description',
      createPackFieldImage: 'Game pack image',
      slots: {
        createTitle: 'Create Slots game',
        createDescription: 'Add stages, topics and questions, save and play anywhere',
      },
    },
    settings: { name: 'Settings' },
  },
};
