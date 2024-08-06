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
    signup: 'Регистрация',
    signout: 'Выход',
    email: 'Почта',
    password: 'Пароль',
  },
  errors: {
    existingUser: 'Пользователь с такой почтой уже зарегистрирован',
    nonExistingUser: 'Пользователь с такой почтой ещё не зарегистрирован',
    invalidEmail: 'Неверный адрес почты',
    invalidPassword: 'Неверный пароль',
    invalidRefreshToken: 'Неверный токен обновления',
    missingConfig: 'Конфигурация {configName} отсутствует',
    database: 'Ошибка доступа к базе данных',
    error: 'Ошибка',
  },
  schema: {
    string: 'Поле должно быть не пустой строкой',
    email: 'Поле должно быть коректной почтой',
    min: 'Поле должно содержать {value} или больше элементов',
  },
};
