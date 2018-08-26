export const SET_START_DATE = 'SET_START_DATE';
export const SET_END_DATE = 'SET_END_DATE';
export const SET_START_TIME = 'SET_START_TIME';
export const SET_END_TIME = 'SET_END_TIME';
export const SET_HOME_ADDRESS = 'SET_HOME_ADDRESS';
export const SET_PROMO_CODE = 'SET_PROMO_CODE';
export const SET_IS_USE_INSURANCE = 'SET_IS_USE_INSURANCE';
export const SET_IS_USE_WALLET = 'SET_IS_USE_WALLET';
export const SET_IS_USE_POINT = 'SET_IS_USE_POINT';
export const SET_IS_USE_PROMOCODE = 'SET_IS_USE_PROMOCODE';
export const SET_TOTAL_PRICE = 'SET_TOTAL_PRICE';
export const SET_ORDER_DETAIL = 'SET_ORDER_DETAIL';

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

export const setIsUseInsurance = value => ({
  type: SET_IS_USE_INSURANCE,
  value,
});

export const setIsUseWallet = value => ({
  type: SET_IS_USE_WALLET,
  value,
});

export const setIsUsePoint = value => ({
  type: SET_IS_USE_POINT,
  value,
});

export const setIsUsePromoCode = value => ({
  type: SET_IS_USE_PROMOCODE,
  value,
});

export const setOrderDetail = value => ({
  type: SET_ORDER_DETAIL,
  value,
});

export const setTotalPrice = value => ({
  type: SET_TOTAL_PRICE,
  value,
});
