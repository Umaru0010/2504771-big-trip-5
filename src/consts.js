export const FilterType = {
  EVERYTHING: 'everything',
  FUTURE: 'future',
  PRESENT: 'present',
  PAST: 'past',
};

export const EmptyListMessage = {
  [FilterType.EVERYTHING]: 'Click New Event to create your first point',
  [FilterType.PAST]: 'There are no past events now',
  [FilterType.PRESENT]: 'There are no present events now',
  [FilterType.FUTURE]: 'There are no future events now',
};

export const SortType = {
  DAY: 'day',
  EVENT: 'event',
  TIME: 'time',
  PRICE: 'price',
  OFFERS: 'offers',
};

export const Mode = {
  DEFAULT: 'DEFAULT',
  EDITING: 'EDITING',
};

export const ActionType = {
  UPDATE_POINT: 'UPDATE_POINT',
  DELETE_POINT: 'DELETE_POINT',
  ADD_POINT: 'ADD_POINT',
};

export const UpdateType = {
  PATCH: 'PATCH',
  MINOR: 'MINOR',
  MAJOR: 'MAJOR',
  INIT: 'INIT',
};

export const FormType = {
  CREATE: 'CREATE',
  EDIT: 'EDIT',
};

export const Method = {
  GET: 'GET',
  PUT: 'PUT',
  POST: 'POST',
  DELETE: 'DELETE',
};

export const TimeLimit = {
  LOWER_LIMIT: 200,
  UPPER_LIMIT: 500,
};

export const EVENTS_TYPES = ['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'];

export const EMPTY_POINT = {
  type: 'flight',
  destination: null,
  dateFrom: null,
  dateTo: null,
  basePrice: 0,
  offers: [],
  isFavorite: false,
};

export const FLATPICKR_CONFIG = {
  dateFormat: 'd/m/y H:i',
  enableTime: true,
  locale: {
    firstDayOfWeek: 1,
  },
  // eslint-disable-next-line camelcase
  time_24hr: true,
};

<<<<<<< HEAD
export const AUTHORIZATION = 'Basic q1w2e3r4t5y6u6i7';
=======
const METHOD = {
  GET: 'GET',
  PUT: 'PUT',
  POST: 'POST',
  DELETE: 'DELETE',
};

const TIME_LIMIT = {
  LOWER_LIMIT: 200,
  UPPER_LIMIT: 500,
};

const FLATPICKR_CONFIG = {
  dateFormat: 'd/m/y H:i',
  enableTime: true,
  locale: {
    firstDayOfWeek: 1,
  },
  // eslint-disable-next-line camelcase
  time_24hr: true,
};
>>>>>>> 525c7aed1fda264884e11d7e957939d137fa0a94

export const END_POINT = 'https://24.objects.htmlacademy.pro/big-trip';

<<<<<<< HEAD
export const CITIES_LENGTH_BORDER = 3;
=======
const END_POINT = 'https://21.objects.htmlacademy.pro/big-trip';

const CITIES_LENGTH_BORDER = 3;

export {
  EVENT_TYPES,
  FILTER_TYPES,
  EMPTY_LIST_MESSAGES,
  SORT_TYPES,
  MODE,
  ACTIONS,
  UPDATE_TYPES,
  EMPTY_POINT,
  FORM_TYPE,
  METHOD,
  AUTHORIZATION,
  END_POINT,
  TIME_LIMIT,
  CITIES_LENGTH_BORDER,
  FLATPICKR_CONFIG,
};
>>>>>>> 525c7aed1fda264884e11d7e957939d137fa0a94
