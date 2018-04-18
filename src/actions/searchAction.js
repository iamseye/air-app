export const SET_SEARCH_BRAND = 'SET_SEARCH_BRAND';
export const SET_SEARCH_VEHICLE_TYPE = 'SET_SEARCH_VEHICLE_TYPE';
export const SET_SEARCH_AREA = 'SET_SEARCH_AREA';

export const setSearchBrand = value => ({
  type: SET_SEARCH_BRAND,
  value,
});

export const setSearchVehicleType = value => ({
  type: SET_SEARCH_VEHICLE_TYPE,
  value,
});

export const setSearchArea = value => ({
  type: SET_SEARCH_AREA,
  value,
});
