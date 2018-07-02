import {
  SET_SEARCH_BRAND,
  SET_SEARCH_VEHICLE_TYPE,
  SET_SEARCH_AREA,
  SET_SEARCH_AREA_OPTIONS,
  SET_SEARCH_BRAND_OPTIONS,
  SET_SEARCH_VEHICLE_TYPE_OPTIONS,
} from '../actions/searchAction';

const initialState = {
  brand: '',
  vehicleType: '',
  area: '',
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
