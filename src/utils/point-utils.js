import dayjs from 'dayjs';
import { pointsSorters } from './sort-utils.js';
import { SortType } from '../consts.js';

export const updateItem = (items, updated) => items.map((item) => item.id === updated.id ? updated : item);

<<<<<<< HEAD
export const getDateDifference = (date1, date2) => {
  const minutesInHour = 60;
  const minutesInDay = 24 * minutesInHour;
  const diffMinutes = Math.abs(dayjs(date2).diff(dayjs(date1), 'minute'));
  const days = Math.floor(diffMinutes / minutesInDay);
  const hours = Math.floor((diffMinutes - days * minutesInDay) / minutesInHour);
  const minutes = diffMinutes % minutesInHour;
=======
function isEscapeKey(evt) {
  return evt.key === 'Escape';
}

const getDateDifference = (date1, date2) => {
  const start = dayjs(date1);
  const end = dayjs(date2);
  let difference = Math.abs(end.diff(start, 'minute'));

  const days = Math.floor(difference / (24 * 60));
  difference -= days * 24 * 60;
  const hours = Math.floor(difference / 60);
  const minutes = difference % 60;
>>>>>>> 525c7aed1fda264884e11d7e957939d137fa0a94

  if (days > 0) {
    return `${String(days).padStart(2, '0')}D ${String(hours).padStart(2, '0')}H ${String(minutes).padStart(2, '0')}M`;
  }
  if (hours > 0) {
    return `${String(hours).padStart(2, '0')}H ${String(minutes).padStart(2, '0')}M`;
  }
  return `${String(minutes).padStart(2, '0')}M`;
};

export const getTime = (date) => dayjs(date).format('HH:mm');
export const getMonthAndDay = (date) => dayjs(date).format('MMM DD');
export const getDayAndMonth = (date) => dayjs(date).format('D MMM');
export const getFullDate = (date) => dayjs(date).format('DD/MM/YY HH:mm');

<<<<<<< HEAD
export const isSameDates = (date1, date2) => dayjs(date1).isSame(date2);
=======
const getMonthAndDay = (date) => dayjs(date).format('MMM DD');

const getDayAndMonth = (date) => dayjs(date).format('D MMM');
>>>>>>> 525c7aed1fda264884e11d7e957939d137fa0a94

export const getOffersByType = (type, allOffers) => allOffers.find((offer) => offer.type === type)?.offers;
export const getOfferById = (id, allOffers) => allOffers.find((offer) => offer.id === id);
export const getDestinationById = (id, destinations) => destinations.find((destination) => destination.id === id);
export const getDestinationByName = (name, destinations) => destinations.find((destination) => destination.name === name);

export const getPointsDataRange = (points) => {
  if (!points.length) {
    return { startDate: '', endDate: '' };
  }

  const sortedPoints = pointsSorters[SortType.DAY]([...points]);
  return {
    startDate: getDayAndMonth(sortedPoints[0].dateFrom),
    endDate: getDayAndMonth(sortedPoints.at(-1).dateTo),
  };
};

export const getTripRoute = (points, destinations) => {
  if (!points.length) {
    return [];
  }
  const sortedPoints = pointsSorters[SortType.DAY]([...points]);
  return sortedPoints.map((point) => getDestinationById(point.destination, destinations).name);
};

<<<<<<< HEAD
export const getTripPrice = (points, allOffers) =>
  points.reduce((total, { type, basePrice, offers }) => {
    const availableOffers = getOffersByType(type, allOffers) || [];
    const offersCost = offers.reduce((sum, id) => sum + (getOfferById(id, availableOffers)?.price || 0), 0);
    return total + basePrice + offersCost;
  }, 0);
=======
const isSameDate = (date1, date2) => dayjs(date1).isSame(date2, 'd');

const sortByDay = (pointA, pointB) => dayjs(pointA.dateFrom).diff(dayjs(pointB.dateFrom));

const sortByTime = (pointA, pointB) => dayjs(pointB.dateTo).diff(pointB.dateFrom) - dayjs(pointA.dateTo).diff(pointA.dateFrom);

const sortByPrice = (pointA, pointB) => pointB.basePrice - pointA.basePrice;

const getOffersByType = (type, offers) => offers.find((offer) => offer.type === type)?.offers;

const getOfferById = (id, offers) => offers?.find((offer) => offer.id === id);

const getDestinationById = (id, destinations) => destinations?.find((destination) => destination.id === id);

const getPointsDataRange = (points) => {
  if (!points.length) {
    return { startDate: '', endDate: '' };
  }

  const sortedPoints = points.sort(sortByDay);
  const startDate = getDayAndMonth(sortedPoints[0].dateFrom);
  const endDate = getDayAndMonth(sortedPoints.at(-1).dateTo);

  return { startDate, endDate };
};

const getTripRoute = (points, destinations) => {
  const cities = [];
  const sortedPoints = points.sort(sortByDay);

  sortedPoints.forEach((point) => {
    cities.push(getDestinationById(point.destination, destinations).name);
  });

  return cities;
};

const getTripPrice = (points, offers) =>
  points.reduce((total, { type, basePrice, offers: pointOffers }) => {
    const availableOffers = getOffersByType(type, offers);
    const offersSum = pointOffers
      .reduce((sum, offerId) => sum + getOfferById(offerId, availableOffers).price, 0);
    return total + basePrice + offersSum;
  }, 0);

export {
  updateItem,
  isEscapeKey,
  getDateDifference,
  getTime,
  getMonthAndDay,
  getFullDate,
  isPastEvent,
  isPresentEvent,
  isFutureEvent,
  isSameDate,
  sortByDay,
  sortByTime,
  sortByPrice,
  getOffersByType,
  getOfferById,
  getDestinationById,
  getPointsDataRange,
  getTripRoute,
  getTripPrice,
};
>>>>>>> 525c7aed1fda264884e11d7e957939d137fa0a94
