import { Dictionary } from '../Dictionary';

export const ruDictionary: Dictionary = {
  theme: {
    theme: 'Тема',
    dark: 'Темная',
    light: 'Светлая',
  },
  localization: {
    language: 'Язык',
    en: 'Английский',
    ru: 'Русский',
  },
  development: {
    developerPanel: 'Панель разработчика',
  },
  navigation: {
    home: 'Главная',
    play: 'Играть',
    library: 'Библиотека',
    hub: 'Комнаты',
    workshop: 'Мастерская',
    settings: 'Настройки',
  },
  metadata: {
    rootDescription: 'Повеселитесь!',
  },
  auth: {
    signin: 'Вход',
    signout: 'Выход',
    email: 'Почта',
    continueWithoutSigning: 'Продолжить без входа',
  },
  errors: {
    database: 'Ошибка доступа к базе данных',
    error: 'Ошибка',
  },
  schema: {
    string: 'Поле должно быть не пустой строкой',
    email: 'Поле должно быть коректной почтой',
  },
};
