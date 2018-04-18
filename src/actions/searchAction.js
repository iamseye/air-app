export const SET_SEARCH_BRAND_TYPE = 'SET_SEARCH_BRAND_TYPE';
export const SET_SEARCH_VEHICLE_TYPE = 'SET_SEARCH_VEHICLE_TYPE';
export const SET_SEARCH_AREA_TYPE = 'SET_SEARCH_AREA_TYPE';

export const setSearchBrandType = value => ({
  type: SET_SEARCH_BRAND_TYPE,
  value,
});

export const setSearchVehicleType = value => ({
  type: SET_SEARCH_VEHICLE_TYPE,
  value,
});

export const setSearchAreaType = value => ({
  type: SET_SEARCH_AREA_TYPE,
  value,
});
