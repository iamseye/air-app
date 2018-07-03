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
} from '../actions/searchAction';

const initialState = {
  vehicleType: '',
  area: '',
  brand: '',
  series: '',
  seriesModel: '',
  year: '',
  brandOptions: [],
  vehicleTypeOptions: [],
  areaOptions: [],
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

    default:
      return state;
  }
};
