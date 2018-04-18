import {
  ACTVIE_WHITE_FILTER,
} from '../actions/styleAction';

const initialState = {
  isActiveWhiteFilter: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTVIE_WHITE_FILTER:
      return { ...state, isActiveWhiteFilter: action.value };

    default:
      return state;
  }
};
