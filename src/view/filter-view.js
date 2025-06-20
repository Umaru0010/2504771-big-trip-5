import AbstractView from '../framework/view/abstract-view.js';

<<<<<<< HEAD
function createFilterTemplate({ filterType, isDisabled }, currentFilterType) {
  const isChecked = currentFilterType === filterType;

  return `
    <div class="trip-filters__filter">
      <input
        id="${`filter-${filterType}`}"
        class="trip-filters__filter-input  visually-hidden"
        type="radio" name="trip-filter"
        value="${filterType}"
        ${isChecked ? 'checked' : ''}
        ${isDisabled ? 'disabled' : ''}
      >
      <label class="trip-filters__filter-label" for="${`filter-${filterType}`}">${filterType}</label>
    </div>
  `;
=======
function createFilterTemplate(filter, currentFilter) {
  const checked = currentFilter === filter.id;
  const disabled = filter.disabled ? 'disabled' : '';

  return `<div class="trip-filters__filter">
    <input id="${`filter-${filter.id.toLowerCase()}`}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${filter.id}" ${checked ? 'checked' : ''} ${disabled}>
    <label class="trip-filters__filter-label" for="${`filter-${filter.id.toLowerCase()}`}">${filter.name}</label>
  </div>`;
>>>>>>> 525c7aed1fda264884e11d7e957939d137fa0a94
}

function createTemplate(filters, currentFilterType) {
  return `
    <form class="trip-filters" action="#" method="get">
      ${filters.map((filter) => createFilterTemplate(filter, currentFilterType)).join('')}
      <button class="visually-hidden" type="submit">Accept filter</button>
    </form>
  `;
}

export default class FilterView extends AbstractView {
  #allFilters;
  #currentFilterType;
  #filterTypeChangeHandler;

  constructor({ filters, currentFilterType, filterTypeChangeHandler }) {
    super();
    this.#allFilters = filters;
    this.#currentFilterType = currentFilterType;
    this.#filterTypeChangeHandler = filterTypeChangeHandler;

    this.element.addEventListener('change', this.#filterElementChangeHandler);
  }

  get template() {
    return createTemplate(this.#allFilters, this.#currentFilterType);
  }

  #filterElementChangeHandler = (evt) => {
    if (evt.target.tagName !== 'INPUT') {
      return;
    }

    evt.preventDefault();
    this.#filterTypeChangeHandler(evt.target.value);
  };
}