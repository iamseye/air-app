const userApi = 'https://staging.api.cocarmaster.com/api';
const proxyUrl = 'https://cors-anywhere.herokuapp.com/';

const api = {
  getSellCars: async () => {
    const url = `${userApi}/sellcars`;
    const response = await fetch(proxyUrl + url);

    return response.json();
  },
  getInitailInfo: async () => {
    const url = `${userApi}/getInitialInfo`;
    const response = await fetch(proxyUrl + url);

    return response.json();
  },
  getSearchSellCars: async (params) => {
    const url = `${userApi}/search-sellcars`;
    const response = await fetch(proxyUrl + url, {
      method: 'POST',
      body: JSON.stringify(params), // data can be `string` or {object}!
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    });
    return response.json();
  },
  getCarBrandOptions: async (params) => {
    const url = `${userApi}/get-brand-options`;
    const response = await fetch(proxyUrl + url, {
      method: 'POST',
      body: JSON.stringify(params), // data can be `string` or {object}!
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    });
    return response.json();
  },
  getTheSellCar: async (id) => {
    const url = `${userApi}/sellcars/${id}`;
    const response = await fetch(proxyUrl + url);

    return response.json();
  },
  signUp: async (params) => {
    const url = `${userApi}/register`;
    const response = await fetch(proxyUrl + url, {
      method: 'POST',
      body: JSON.stringify(params), // data can be `string` or {object}!
      headers: new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }),
    });
    return response.json();
  },
  sendVerifySMSCode: async (params) => {
    const url = `${userApi}/send-mobile-verification-code`;
    const response = await fetch(proxyUrl + url, {
      method: 'POST',
      body: JSON.stringify(params), // data can be `string` or {object}!
      headers: new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }),
    });
    return response.json();
  },
  verifySMS: async (params) => {
    const url = `${userApi}/verify-mobile`;
    const response = await fetch(proxyUrl + url, {
      method: 'POST',
      body: JSON.stringify(params), // data can be `string` or {object}!
      headers: new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }),
    });
    return response.json();
  },
  sendValidiationEmail: async (params) => {
    const url = `${userApi}/send-verification-email`;
    const response = await fetch(proxyUrl + url, {
      method: 'POST',
      body: JSON.stringify(params), // data can be `string` or {object}!
      headers: new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }),
    });
    return response.json();
  },
};

export default api;
