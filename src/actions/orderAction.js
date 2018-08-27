export const SET_START_DATE = 'SET_START_DATE';
export const SET_END_DATE = 'SET_END_DATE';
export const SET_START_TIME = 'SET_START_TIME';
export const SET_END_TIME = 'SET_END_TIME';
export const SET_HOME_ADDRESS = 'SET_HOME_ADDRESS';
export const SET_PROMO_CODE = 'SET_PROMO_CODE';
export const SET_IS_USE_INSURANCE = 'SET_IS_USE_INSURANCE';
export const SET_CAL_TOTAL_PRICE = 'SET_CAL_TOTAL_PRICE';
export const SET_ORDER_DETAIL = 'SET_ORDER_DETAIL';
export const SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE';
export const SET_CHOSEN_DISCOUNT = 'SET_CHOSEN_DISCOUNT';
export const SET_CHOSEN_DISCOUNT_VALUE = 'SET_CHOSEN_DISCOUNT_VALUE';


export const setStartDate = value => ({
  type: SET_START_DATE,
  value,
});

export const setEndDate = value => ({
  type: SET_END_DATE,
  value,
});

export const setStartTime = value => ({
  type: SET_START_TIME,
  value,
});

export const setEndTime = value => ({
  type: SET_END_TIME,
  value,
});

export const setHomeAdress = value => ({
  type: SET_HOME_ADDRESS,
  value,
});

export const setPromoCode = value => ({
  type: SET_PROMO_CODE,
  value,
});

export const setIsUseInsurance = value => (dispatch, getState) => {
  dispatch({
    type: SET_IS_USE_INSURANCE,
    value,
  });
  return Promise.resolve(getState());
};

export const setChosenDiscount = value => ({
  type: SET_CHOSEN_DISCOUNT,
  value,
});

export const setChosenDiscountValue = value => (dispatch, getState) => {
  dispatch({
    type: SET_CHOSEN_DISCOUNT_VALUE,
    value,
  });
  return Promise.resolve(getState());
};

export const setOrderDetail = value => ({
  type: SET_ORDER_DETAIL,
  value,
});

export const setCalTotalPrice = value => ({
  type: SET_CAL_TOTAL_PRICE,
  value,
});

export const setErrorMessage = value => ({
  type: SET_ERROR_MESSAGE,
  value,
});

// export const calculatePayment = (isUseInsurance, insurancePrice, totalPrice, chosenDiscountValue) => {
//   return (dispatch) => {
//     setIsUseInsurance(isUseInsurance).then(newState => {
//
//     });
//   };
// };
