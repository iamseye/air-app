export const SET_START_DATE = 'SET_START_DATE';
export const SET_END_DATE = 'SET_END_DATE';
export const SET_START_TIME = 'SET_START_TIME';
export const SET_END_TIME = 'SET_END_TIME';
export const SET_HOME_ADDRESS = 'SET_HOME_ADDRESS';
export const SET_PROMO_CODE = 'SET_PROMO_CODE';
export const SET_IS_USE_INSURANCE = 'SET_IS_USE_INSURANCE';

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
