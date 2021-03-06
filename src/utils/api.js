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
};

export default api;
