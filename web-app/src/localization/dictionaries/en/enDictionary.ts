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
    signup: 'Sign Up',
  },
  errors: {
    existingUser: 'User with this email is already signed up',
    nonExistingUser: 'User with this email was not signed up yet',
    invalidEmail: 'Invalid email',
    invalidPassword: 'Invalid password',
    invalidRefreshToken: 'invalid refresh token',
    missingConfig: 'Configuration {configName} is missing',
    database: 'Error accessing database',
    error: 'Error',
  },
  schema: {
    string: 'Field should not be empty',
    email: 'Field should be a valid email address',
    min: 'Field length should be {value} or more',
  },
};
