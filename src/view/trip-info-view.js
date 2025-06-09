import { CITIES_LENGTH_BORDER } from '../consts.js';
import AbstractView from '../framework/view/abstract-view.js';
<<<<<<< HEAD

function createTemplate(dateRange, routeCities, totalPrice) {
  const route = routeCities.length > CITIES_LENGTH_BORDER ? `${routeCities[0]} &mdash; ... &mdash; ${routeCities.at(-1)}` : routeCities.join(' &mdash; ');

  return `
    <section class="trip-main__trip-info  trip-info">
      <div class="trip-info__main">
        <h1 class="trip-info__title">${route}</h1>
=======
import { getPointsDataRange, getTripPrice, getTripRoute } from '../utils/point-utils.js';

function createTripInfoTemplate(dateRange, cities, totalPrice) {
  return (
    `<section class="trip-main__trip-info  trip-info">
      <div class="trip-info__main">
        <h1 class="trip-info__title">${cities.length > CITIES_LENGTH_BORDER ? `${cities[0]} &mdash; .... &mdash; ${cities.at(-1)}` : cities.join(' &mdash; ')}</h1>
>>>>>>> 525c7aed1fda264884e11d7e957939d137fa0a94

        <p class="trip-info__dates">${dateRange.startDate}&nbsp;&mdash;&nbsp;${dateRange.endDate}</p>
      </div>

      <p class="trip-info__cost">
        Total: &euro;&nbsp;<span class="trip-info__cost-value">${totalPrice}</span>
      </p>
<<<<<<< HEAD
    </section>
    `;
}

export default class TripInfoView extends AbstractView {
  #dateRange;
  #route;
  #totalPrice;

  constructor(dateRange, routeCities, totalPrice) {
    super();
    this.#dateRange = dateRange;
    this.#route = routeCities;
    this.#totalPrice = totalPrice;
  }

  get template() {
    return createTemplate(this.#dateRange, this.#route, this.#totalPrice);
=======
    </section>`
  );
}

export default class TripInfoView extends AbstractView {
  #points = null;
  #destinations = null;
  #offers = null;

  constructor(points, destinations, offers) {
    super();
    this.#points = points;
    this.#destinations = destinations;
    this.#offers = offers;
  }

  get template() {
    return createTripInfoTemplate(
      getPointsDataRange(this.#points),
      getTripRoute(this.#points, this.#destinations),
      getTripPrice(this.#points, this.#offers)
    );
>>>>>>> 525c7aed1fda264884e11d7e957939d137fa0a94
  }
}