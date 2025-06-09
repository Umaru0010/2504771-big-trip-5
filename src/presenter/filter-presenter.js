<<<<<<< HEAD
import FilterView from '../view/filter-view.js';
import { FilterType, UpdateType } from '../consts.js';
import { pointsFilters } from '../utils/filter-utils.js';
import { render, replace } from '../framework/render.js';
=======
import { FiltersView } from '../view/filter-view.js';
import { FILTER_TYPES, UPDATE_TYPES } from '../consts.js';
import { pointsFilters } from '../utils/filter-utils.js';
import { render, replace } from '../framework/render';
>>>>>>> 525c7aed1fda264884e11d7e957939d137fa0a94

export default class FilterPresenter {
  #container;
  #filterModel;
  #pointsListModel;
  #component;

  constructor({ containerElement, filterModel, pointsListModel }) {
    this.#container = containerElement;
    this.#filterModel = filterModel;
    this.#pointsListModel = pointsListModel;

<<<<<<< HEAD
    this.#filterModel.addObserver(this.#modelChangeHandler);
    this.#pointsListModel.addObserver(this.#modelChangeHandler);
=======
    this.#pointsModel.addObserver(this.#onPointsModelChange);
    this.#filterModel.addObserver(this.#onPointsModelChange);
  }

  get filters() {
    const allPoints = this.#pointsModel.points;
    return Object.values(FILTER_TYPES).map((type) => {
      const count = pointsFilters[type](allPoints).length;
      return {
        id: type,
        name: type,
        disabled: count === 0
      };
    });
>>>>>>> 525c7aed1fda264884e11d7e957939d137fa0a94
  }

  init() {
    const previusComponent = this.#component;
    this.#component = new FilterView({
      filters: Object.values(FilterType).map((filterType) => ({
        filterType,
        isDisabled: pointsFilters[filterType](this.#pointsListModel.points).length === 0
      })),
      currentFilterType: this.#filterModel.currentFilterType,
      filterTypeChangeHandler: this.#filterTypeChangeHandler,
    });

    if (!previusComponent) {
      render(this.#component, this.#container);
    } else {
      replace(this.#component, previusComponent);
    }
  }

  #filterTypeChangeHandler = (filterType) => this.#filterModel.setFilter(UpdateType.MAJOR, filterType);

  #modelChangeHandler = () => this.init();
}