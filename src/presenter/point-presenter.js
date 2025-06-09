import PointRouteView from '../view/point-view.js';
import { render, replace, remove } from '../framework/render.js';
import FormEditingView from '../view/edit-form-view.js';
import { Mode, ActionType, UpdateType } from '../consts.js';
import { isSameDates } from '../utils/point-utils.js';
import { createEscKeydownHandler } from '../utils/common-utils.js';

export default class PointPresenter {
  #destinations;
  #offers;
  #container;
  #component;
  #editingElement;
  #infoChangeHandler;
  #modeChangeHandler;
  #mode = Mode.DEFAULT;
  #pointData;

  constructor({ destinations, offers, containerElement, dataChangeHandler, modeChangeHandler }) {
    this.#destinations = destinations;
    this.#offers = offers;
    this.#container = containerElement;
    this.#infoChangeHandler = dataChangeHandler;
    this.#modeChangeHandler = modeChangeHandler;
  }

  init(point) {
    this.#pointData = point;
    const previusComponent = this.#component;
    const previusEditingComponent = this.#editingElement;

    this.#component = new PointRouteView({
      point,
      destinations: this.#destinations,
      offers: this.#offers,
      rollupButtonClickHandler: this.#componentRollupButtonClickHandler,
      favoriteButtonClickHandler: this.#favoriteButtonClickHandler,
    });

<<<<<<< HEAD
    this.#editingElement = new FormEditingView({
      point,
      destinations: this.#destinations,
      offers: this.#offers,
      rollupButtonClickHandler: this.#editComponentRollupButtonClickHandler,
      submitButtonClickHandler: this.#submitButtonClickHandler,
      deleteButtonClickHandler: this.#deleteButtonClickHandler,
=======
    this.#editFormItem = new FormEditingView({
      point: this.#point, destinations: this.#destinations, offers: this.#offers,
      onRollButtonClick: () => {
        this.#editFormItem.reset(this.#point);
        this.#replaceEditFormToPoint();
      },
      onSubmitButtonClick: async (value) => {
        const isMinor = !isSameDate(value.dateFrom, this.#point.dateFrom) ||
          !isSameDate(value.dateTo, this.#point.dateTo) || value.basePrice !== this.#point.basePrice;
        await this.#updateData(ACTIONS.UPDATE_POINT, isMinor ? UPDATE_TYPES.MINOR : UPDATE_TYPES.PATCH, value);
      },
      onDeleteClick: async (value) => {
        await this.#updateData(ACTIONS.DELETE_POINT, UPDATE_TYPES.MINOR, value);
      }
>>>>>>> 525c7aed1fda264884e11d7e957939d137fa0a94
    });

    if (!previusComponent || !previusEditingComponent) {
      render(this.#component, this.#container);
      return;
    }

    if (this.#mode === Mode.DEFAULT) {
      replace(this.#component, previusComponent);
    } else {
      replace(this.#component, previusEditingComponent);
      this.#mode = Mode.DEFAULT;
    }

    remove([previusComponent, previusEditingComponent]);
  }

  destroy() {
    document.removeEventListener('keydown', this.#escKeydownHandler);
    remove([this.#component, this.#editingElement]);
  }

  resetEditViewToPointView() {
    if (this.#mode !== Mode.DEFAULT) {
      this.#editingElement.reset(this.#pointData);
      replace(this.#component, this.#editingElement);
      document.removeEventListener('keydown', this.#escKeydownHandler);
      this.#mode = Mode.DEFAULT;
    }
  }

  setSaving() {
    if (this.#mode === Mode.EDITING) {
      this.#editingElement.updateElement({ isDisabled: true, isSaving: true });
    }
  }

  setDeleting() {
    if (this.#mode === Mode.EDITING) {
      this.#editingElement.updateElement({ isDisabled: true, isDeleting: true });
    }
  }

  setAborting() {
<<<<<<< HEAD
    if (this.#mode === Mode.DEFAULT) {
      this.#component.shake();
      return;
    }
    this.#editingElement.shake(this.#editingElement.updateElement({ isDisabled: false, isSaving: false, isDeleting: false }));
=======
    if (this.#mode === MODE.DEFAULT) {
      this.#pointItem.shake();
      return;
    }

    const resetFormState = () => {
      this.#editFormItem.updateElement({
        isDisabled: false,
        isSaving: false,
        isDeleting: false,
      });
    };
    this.#editFormItem.shake(resetFormState);
>>>>>>> 525c7aed1fda264884e11d7e957939d137fa0a94
  }

  #componentRollupButtonClickHandler = () => {
    this.#modeChangeHandler();
    this.#mode = Mode.EDITING;
    replace(this.#editingElement, this.#component);
    document.addEventListener('keydown', this.#escKeydownHandler);
  };

  #editComponentRollupButtonClickHandler = () => this.resetEditViewToPointView();

  #submitButtonClickHandler = async (updatedPoint) => {
    const isMinor =
      !isSameDates(updatedPoint.dateFrom, this.#pointData.dateFrom) ||
      !isSameDates(updatedPoint.dateTo, this.#pointData.dateTo) ||
      updatedPoint.basePrice !== this.#pointData.basePrice;

    await this.#infoChangeHandler(
      ActionType.UPDATE_POINT,
      isMinor ? UpdateType.MINOR : UpdateType.PATCH,
      updatedPoint
    );
  };

  #deleteButtonClickHandler = async (pointToDelete) => {
    await this.#infoChangeHandler(ActionType.DELETE_POINT, UpdateType.MINOR, pointToDelete);
  };

  #favoriteButtonClickHandler = () => this.#infoChangeHandler(
    ActionType.UPDATE_POINT, UpdateType.MINOR,
    { ...this.#pointData, isFavorite: !this.#pointData.isFavorite }
  );

  #escKeydownHandler = createEscKeydownHandler(() => this.resetEditViewToPointView());
}