import {
  SET_START_DATE,
  SET_END_DATE,
  SET_START_TIME,
  SET_END_TIME,
  SET_HOME_ADDRESS,
  SET_PROMO_CODE,
  SET_IS_USE_INSURANCE,
  SET_ORDER_DETAIL,
  SET_CAL_TOTAL_PRICE,
  SET_ERROR_MESSAGE,
  SET_CHOSEN_DISCOUNT,
  SET_CHOSEN_DISCOUNT_VALUE,
} from '../actions/orderAction';

const initialState = {
  startDate: '',
  endDate: '',
  startTime: '',
  endTime: '',
  homeAddress: '',
  promoCode: '',
  isUseInsurance: true,
  chosenDiscount: '',
  chosenDiscountValue: 0,
  calTotalPrice: 0,
  orderDetail: {
    car_year: 0,
    car_name: '',
    pickup_place: '',
    pickup_price: 0,
    rent_days: 0,
    insurance_price: 0,
    emergency_fee: 0,
    long_rent_discount: 0,
    rent_price: 0,
    total_price: 0,
    start_date: '',
    end_date: '',
    user_points: 0,
    user_wallets: 0,
  },
  errorMessage: '',
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

    case SET_CHOSEN_DISCOUNT:
      return { ...state, chosenDiscount: action.value };

    case SET_CHOSEN_DISCOUNT_VALUE:
      return { ...state, chosenDiscountValue: action.value };

    case SET_ORDER_DETAIL:
      return { ...state, orderDetail: action.value };

    case SET_CAL_TOTAL_PRICE:
      return { ...state, calTotalPrice: action.value };
      // return {
      //   ...state,
      //   orderDetail: {
      //     ...state.orderDetail,
      //     total_price: action.value,
      //   },
      // };

    case SET_ERROR_MESSAGE:
      return { ...state, errorMessage: action.value };

    default:
      return state;
  }
};
