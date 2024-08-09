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
  pages: {
    home: { name: 'Главная' },
    play: { name: 'Играть' },
    library: { name: 'Библиотека' },
    hub: { name: 'Комнаты' },
    workshop: { name: 'Мастерская' },
    settings: { name: 'Настройки' },
  },
};
