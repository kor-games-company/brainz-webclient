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
  navigation: {
    home: 'Home',
    play: 'Play',
    library: 'Library',
    hub: 'Hub',
    workshop: 'Workshop',
    settings: 'Settings',
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
};
