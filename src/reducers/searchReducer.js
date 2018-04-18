import {
  SET_SEARCH_BRAND,
  SET_SEARCH_VEHICLE_TYPE,
  SET_SEARCH_AREA,
} from '../actions/searchAction';

const initialState = {
  brand: '',
  vehicleType: '',
  area: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_BRAND:
      return { ...state, brand: action.value };

    case SET_SEARCH_VEHICLE_TYPE:
      return { ...state, vehicleType: action.value };

    case SET_SEARCH_AREA:
      return { ...state, area: action.value };

    default:
      return state;
  }
};
