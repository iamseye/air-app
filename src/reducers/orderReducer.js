import {
  SET_START_DATE,
  SET_END_DATE,
  SET_START_TIME,
  SET_END_TIME,
  SET_HOME_ADDRESS,
  SET_PROMO_CODE,
  SET_IS_USE_INSURANCE,
} from '../actions/orderAction';

const initialState = {
  startDate: '',
  endDate: '',
  startTime: '',
  endTime: '',
  homeAddress: '',
  promoCode: '',
  isUseInsurance: true,
};


export default (state = initialState, action) => {
  switch (action.type) {
    case SET_START_DATE:
      return { ...state, startDate: action.value };

    case SET_END_DATE:
      return { ...state, endDate: action.value };

    case SET_START_TIME:
      return { ...state, startTime: action.value };

    case SET_END_TIME:
      return { ...state, endTime: action.value };

    case SET_HOME_ADDRESS:
      return { ...state, homeAddress: action.value };

    case SET_PROMO_CODE:
      return { ...state, promoCode: action.value };

    case SET_IS_USE_INSURANCE:
      return { ...state, isUseInsurance: action.value };

    default:
      return state;
  }
};
