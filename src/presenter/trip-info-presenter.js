import TripInfoView from '../view/trip-info-view.js';
<<<<<<< HEAD
import { render, remove, replace, RenderPosition } from '../framework/render.js';
import { getPointsDataRange, getTripPrice, getTripRoute } from '../utils/point-utils.js';

export default class TripInfoPresenter {
  #containerElement;
  #pointsListModel;
  #component;

  constructor({ containerElement, pointsListModel }) {
    this.#containerElement = containerElement;
    this.#pointsListModel = pointsListModel;
    this.#pointsListModel.addObserver(this.#modelChangeHandler);
  }

  init() {
    const allPoints = this.#pointsListModel.points;

    if (allPoints.length === 0) {
      if (this.#component) {
        remove(this.#component);
        this.#component = null;
      }
      return;
    }

    const dataLength = getPointsDataRange(allPoints);
    const route = getTripRoute(allPoints, this.#pointsListModel.destinations);
    const totalPrice = getTripPrice(allPoints, this.#pointsListModel.offers);

    const previousComponent = this.#component;
    this.#component = new TripInfoView(dataLength, route, totalPrice);

    if (!previousComponent) {
      render(this.#component, this.#containerElement, RenderPosition.AFTERBEGIN);
    } else {
      replace(this.#component, previousComponent);
    }
  }

  #modelChangeHandler = () => this.init();
=======
import { render, replace } from '../framework/render.js';
import { RenderPosition } from '../framework/render.js';

export default class TripInfoPresenter {
  #container = null;
  #pointsListModel = null;
  #tripInfoComponent = null;

  constructor({ container, pointsListModel }) {
    this.#container = container;
    this.#pointsListModel = pointsListModel;
    this.#pointsListModel.addObserver(this.#onPointListModelChange);
  }

  init() {
    this.#renderTripInfo();
  }

  #onPointListModelChange = () => {
    this.#renderTripInfo();
  };

  #renderTripInfo() {
    const prevComponent = this.#tripInfoComponent;
    this.#tripInfoComponent = new TripInfoView(this.#pointsListModel.points, this.#pointsListModel.destinations, this.#pointsListModel.offers);

    if (prevComponent === null) {
      render(this.#tripInfoComponent, this.#container, RenderPosition.AFTERBEGIN);
    } else {
      replace(this.#tripInfoComponent, prevComponent);
    }
  }
>>>>>>> 525c7aed1fda264884e11d7e957939d137fa0a94
}