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
    email: 'Field should be a valid email address',
  },
  pages: {
    home: { name: 'Home' },
    play: { name: 'Play' },
    library: { name: 'Library' },
    hub: { name: 'Hub' },
    workshop: {
      name: 'Workshop',
      description: 'Here you can create your own packs to play with your friends',
      createPackTitle: 'Create your game',
      createPackDescription: 'Choose what game type you want to create',
      createSlotsPack: 'New Slots game',
      createTerritoryPack: 'New Territory game',
      createQuizPack: 'New Quiz',
      inDevelopment: 'In development...',
      returnToWorkshop: 'Back to workshop',
      slots: {
        createTitle: 'Create Slots game',
        createDescription: 'Add stages, topics and questions, save and play anywhere',
      },
    },
    settings: { name: 'Settings' },
  },
};
