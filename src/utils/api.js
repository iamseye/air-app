const userApi = 'https://staging.api.cocarmaster.com/api';

// const encodeQueryData = (data) => {
//   const ret = [];
//   for (let d in data) {
//     ret.push(`${encodeURIComponent(d)}=${encodeURIComponent(data[d])}`);
//   }
//   return ret.join('&');
// };
const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const api = {
  getSellCars: async () => {
    const url = `${userApi}/sellcars`;
    const response = await fetch(proxyUrl + url);

    return response.json();
  },
};

export default api;
