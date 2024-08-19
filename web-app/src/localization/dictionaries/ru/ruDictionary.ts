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
    minLength: 'Длина поля должна быть больше или равна {arg1}',
    maxLength: 'Длина поля должна быть меньше или равна {arg1}',
    image: 'Изображение не должно отсутствовать',
    enum: 'В поле {arg1} должно быть выбрано корректное значение',
  },
  pages: {
    home: { name: 'Главная' },
    play: { name: 'Играть' },
    library: { name: 'Библиотека' },
    hub: { name: 'Комнаты' },
    workshop: {
      name: 'Мастерская',
      description: 'Здесь ты можешь создать свои паки для игры с друзьями',
      createGameTitle: 'Создай свою игру',
      createGameDescription: 'Выбери тип игры, который хочешь создать',
      createSlotsPack: 'Новая игра в слоты',
      createTerritoryPack: 'Новая игра в территорию',
      createQuizPack: 'Новая викторина',
      inDevelopment: 'В разработке...',
      returnToWorkshop: 'Вернуться в мастерскую',
      createPackFieldsetLegend: 'Создай игровой пак',
      createPackFieldLabel: 'Имя игрового пака',
      createPackFieldDescription: 'Описание игрового пака',
      createPackFieldImage: 'Изображение игрового пака',
      slots: {
        createTitle: 'Создание игры в слоты',
        createDescription:
          'Добавь этапы, темы и вопросы, сохрани и играй в любом месте в любое время',
      },
    },
    settings: { name: 'Настройки' },
  },
};
