export const SHOW_MODAL = 'SHOW_MODAL';
export const SIGNUP_USER = 'SIGNUP_USER';
export const LOGIN_USER = 'LOGIN_USER';
export const SET_MOBILE = 'SET_MOBILE';
export const SET_EMAIL = 'SET_EMAIL';
export const SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE';
export const SET_LOGINED = 'SET_LOGINED';

export const showModal = value => ({
  type: SHOW_MODAL,
  value,
});

export const signupUser = value => ({
  type: SIGNUP_USER,
  value,
});

export const loginUser = value => ({
  type: LOGIN_USER,
  value,
});

export const setAuthUer = (value) => {
  const userApi = 'https://staging.api.cocarmaster.com/api';
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  const url = `${userApi}/get-auth-user`;

  return dispatch => fetch(proxyUrl + url, {
    method: 'POST',
    body: JSON.stringify(value), // data can be `string` or {object}!
    headers: new Headers({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${value}`,
    }),
  })
    .then(res => res.json())
    .then((json) => {
      if (json && json.data) {
        console.log('logined');
        console.log(json.data);
        dispatch(loginUser(json.data));
      } else {
        console.log('set login error');
      }
    });
};

export const setLogined = () => ({
  type: SET_LOGINED,
});

export const setMobile = value => ({
  type: SET_MOBILE,
  value,
});

export const setEmail = value => ({
  type: SET_EMAIL,
  value,
});

export const setErrorMessage = value => ({
  type: SET_ERROR_MESSAGE,
  value,
});

export const signUp = (value) => {
  const userApi = 'https://staging.api.cocarmaster.com/api';
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  const url = `${userApi}/register`;

  return dispatch => fetch(proxyUrl + url, {
    method: 'POST',
    body: JSON.stringify(value), // data can be `string` or {object}!
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
  })
    .then(res => res.json())
    .then((json) => {
      if (json && json.data) {
        console.log(json.data);
        dispatch(signupUser(json.data));
      } else {
        console.log('signup error');
      }
    });
};
