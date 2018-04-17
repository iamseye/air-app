import {
  SET_SEARCH_BRAND_TYPE,
  SET_SEARCH_VEHICLE_TYPE,
  SET_SEARCH_AREA_TYPE,
} from '../actions/searchAction';

const initialState = {
  searchBrandType: '',
  searchVehicleType: '',
  searchAreaType: '',
};

export default (state = initialState, action) => {
  console.log('test');
  console.log(action.type);
  switch (action.type) {
    case SET_SEARCH_BRAND_TYPE:
      return { ...state, searchBrandType: action.value };

    case SET_SEARCH_VEHICLE_TYPE:
      return { ...state, searchVehicleType: action.value };

    case SET_SEARCH_AREA_TYPE:
      return { ...state, searchAreaType: action.value };

    default:
      return state;
  }
};
