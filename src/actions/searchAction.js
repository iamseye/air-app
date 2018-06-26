export const SET_SEARCH_BRAND = 'SET_SEARCH_BRAND';
export const SET_SEARCH_VEHICLE_TYPE = 'SET_SEARCH_VEHICLE_TYPE';
export const SET_SEARCH_AREA = 'SET_SEARCH_AREA';
export const SET_SEARCH_BRAND_OPTIONS = 'SET_SEARCH_BRAND_OPTIONS';
export const SET_SEARCH_VEHICLE_TYPE_OPTIONS = 'SET_SEARCH_VEHICLE_TYPE_OPTIONS';
export const SET_SEARCH_AREA_OPTIONS = 'SET_SEARCH_AREA_OPTIONS';

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

export const setSearchBrandOptions = value => ({
  type: SET_SEARCH_BRAND_OPTIONS,
  value,
});

export const setSearchVehicleTypeOptions = value => ({
  type: SET_SEARCH_VEHICLE_TYPE_OPTIONS,
  value,
});

export const setSearchAreaOptions = value => ({
  type: SET_SEARCH_AREA_OPTIONS,
  value,
});
