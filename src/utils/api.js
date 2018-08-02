const userApi = 'https://staging.api.cocarmaster.com/api';
//const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const token = localStorage.getItem('USER_TOKEN') ? localStorage.getItem('USER_TOKEN') : '';

const api = {
  getSellCars: async () => {
    const url = `${userApi}/sellcars`;
    const response = await fetch(url);

    return response.json();
  },
  getInitailInfo: async () => {
    const url = `${userApi}/getInitialInfo`;
    const response = await fetch(url);

    return response.json();
  },
  getSearchSellCars: async (params) => {
    const url = `${userApi}/search-sellcars`;
    const response = await fetch(url, {
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
    const response = await fetch(url, {
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
    const response = await fetch(url);

    return response.json();
  },
  signUp: async (params) => {
    const url = `${userApi}/register`;
    const response = await fetch(url, {
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
    const response = await fetch(url, {
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
    const response = await fetch(url, {
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
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(params), // data can be `string` or {object}!
      headers: new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }),
    });
    return response.json();
  },
  login: async (params) => {
    const url = `${userApi}/login`;
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(params), // data can be `string` or {object}!
      headers: new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }),
    });
    return response.json();
  },
  getPaymentDetail: async (params) => {
    const url = `${userApi}/get-payment-detail`;
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(params),
      headers: new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      }),
    });
    return response.json();
  },
  placeOrder: async (params) => {
    const url = `${userApi}/create-rent-order`;
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(params),
      headers: new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      }),
    });
    //return response;
  },
};

export default api;
