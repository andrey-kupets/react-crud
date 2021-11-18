export const errorsEnum = {
  // BAD_REQUEST

  4000: {
    en: 'BAD REQUEST',
    ua: 'Запит невірний',
    ru: 'Запрос неверный',
  },

  // BAD_REQUEST - JOI

  4001: {
    en: 'Wrong fields',
    ua: 'Невірно заповнено поля',
    ru: 'Неверно заполнены поля',
  },

  // BAD REQUEST - USER

  4006: {
    en: 'Incorrect user',
    ua: 'Деякі поля користувача заповнені невірно',
    ru: 'Некоторые поля пользователя заполнены неверно',
  },

  // USER

  4007: {
    en: 'No user',
    ua: 'Користувача не знайдено',
    ru: 'Пользователь не найден',
  },

  4008: {
    en: 'No users',
    ua: 'Користувачів не знайдено',
    ru: 'Пользователи не найдены',
  },

  4009: {
    en: 'User with such username is already registered',
    ua: 'Користувача з таким никнеймом вже зареєстровано',
    ru: 'Пользователь с таким никнеймом уже зарегистрирован',
  },

  // BAD REQUEST - MUTUAL

  40015: {
    en: 'Some fields are empty',
    ua: 'Деякі поля незаповнені',
    ru: 'Некоторые поля незаполнены',
  },

  40016: {
    en: 'Invalid ID',
    ua: 'Невірно вказано ID',
    ru: 'Неверно указан ID',
  },

  // NOT FOUND

  4041: {
    en: 'Record not found',
    ua: 'Запис не знайдено',
    ru: 'Запись не найдена',
  },

  // SERVER ERROR

  5000: {
    en: 'Internal Server Error',
    ua: 'Помилка серверу',
    ru: 'Ошибка сервера',
  }
};
