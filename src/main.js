import PointListPresenter from './presenter/point-list-presenter.js';
import FilterPresenter from './presenter/filter-presenter.js';
import NewPointButtonPresenter from './presenter/new-point-button-presenter.js';
<<<<<<< HEAD
import SortPresenter from './presenter/sort-presenter.js';
import PointsListModel from './model/points-list-model.js';
import FilterModel from './model/filter-model.js';
import SortModel from './model/sort-model.js';
=======
>>>>>>> 525c7aed1fda264884e11d7e957939d137fa0a94
import TripInfoPresenter from './presenter/trip-info-presenter.js';
import PointsApiService from './point-api-service.js';
import { AUTHORIZATION, END_POINT } from './consts.js';

<<<<<<< HEAD
const tripMainContainer = document.querySelector('.trip-main');
const tripEventsContainer = document.querySelector('.trip-events');
const filterContainer = document.querySelector('.trip-controls__filters');

const pointsListModel = new PointsListModel({ pointsApiService: new PointsApiService(END_POINT, AUTHORIZATION) });
const filterModel = new FilterModel();
const sortModel = new SortModel();

new TripInfoPresenter({
  containerElement: tripMainContainer,
  pointsListModel: pointsListModel,
}).init();

const newPointButtonPresenter = new NewPointButtonPresenter({
  containerElement: tripMainContainer,
=======
const pointsListModel = new PointsListModel({ pointsApiService: new PointsApiService(END_POINT, AUTHORIZATION) });

const filterModel = new FilterModel();

const tripInfoPresenter = new TripInfoPresenter({
  container: document.querySelector('.trip-main'),
  pointsListModel: pointsListModel
});

const newPointButtonPresenter = new NewPointButtonPresenter({
  container: document.querySelector('.trip-main')
});

const pointsListPresenter = new PointListPresenter({
  tripEvents: document.querySelector('.trip-events'),
  filterModel,
>>>>>>> 525c7aed1fda264884e11d7e957939d137fa0a94
  pointsListModel,
});

const pointsListPresenter = new PointListPresenter({
  containerElement: tripEventsContainer,
  filterModel,
  sortModel,
  pointsListModel,
  newPointButtonPresenter,
});

new SortPresenter({
  containerElement: tripEventsContainer,
  sortModel,
  pointsListModel,
  filterModel,
}).init();
<<<<<<< HEAD

new FilterPresenter({
  containerElement: filterContainer,
  filterModel,
  pointsListModel,
}).init();

newPointButtonPresenter.init({ buttonClickHandler: pointsListPresenter.newPointButtonClickHandler });
pointsListPresenter.init();
pointsListModel.init();
=======
newPointButtonPresenter.init({ onNewPointButtonClick: pointsListPresenter.onNewPointButtonClick });
pointsListPresenter.init();
pointsListModel.init();
tripInfoPresenter.init();
>>>>>>> 525c7aed1fda264884e11d7e957939d137fa0a94
