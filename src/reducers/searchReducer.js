import {
  SET_SEARCH_BRAND,
  SET_SEARCH_VEHICLE_TYPE,
  SET_SEARCH_AREA,
  SET_SEARCH_AREA_OPTIONS,
  SET_SEARCH_BRAND_OPTIONS,
  SET_SEARCH_VEHICLE_TYPE_OPTIONS,
  SET_SEARCH_YEAR,
  SET_SEARCH_SERIES,
  SET_SEARCH_SERIES_MODEL,
  SET_SEARCH_START_DATE,
  SET_SEARCH_END_DATE,
  SET_SEARCH_PRICE,
  SET_SEARCH_PRICE_OPTIONS,
} from '../actions/searchAction';

const initialState = {
  vehicleType: '',
  area: '',
  brand: '',
  series: '',
  seriesModel: '',
  year: '',
  price: [],
  brandOptions: [],
  vehicleTypeOptions: [],
  areaOptions: [],
  priceOptions: [],
  startDate: '',
  endDate: '',
};


export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_BRAND:
      return { ...state, brand: action.value };

    case SET_SEARCH_VEHICLE_TYPE:
      return { ...state, vehicleType: action.value };

    case SET_SEARCH_AREA:
      return { ...state, area: action.value };

    case SET_SEARCH_YEAR:
      return { ...state, year: action.value };

    case SET_SEARCH_SERIES:
      return { ...state, series: action.value };

    case SET_SEARCH_SERIES_MODEL:
      return { ...state, seriesModel: action.value };

    case SET_SEARCH_AREA_OPTIONS:
      return { ...state, areaOptions: action.value };

    case SET_SEARCH_BRAND_OPTIONS:
      return { ...state, brandOptions: action.value };

    case SET_SEARCH_VEHICLE_TYPE_OPTIONS:
      return { ...state, vehicleTypeOptions: action.value };

    case SET_SEARCH_PRICE_OPTIONS:
      return { ...state, priceOptions: action.value };

    case SET_SEARCH_START_DATE:
      return { ...state, startDate: action.value };

    case SET_SEARCH_END_DATE:
      return { ...state, endDate: action.value };

    case SET_SEARCH_PRICE:
      return { ...state, price: action.value };

    default:
      return state;
  }
};
