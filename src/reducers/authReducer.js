import {
  SIGNUP_USER,
  LOGIN_USER,
  SHOW_MODAL,
  SET_MOBILE,
  SET_ERROR_MESSAGE,
  SET_EMAIL,
  SET_LOGINED,
} from '../actions/authActions';

const initialState = {
  name: '',
  email: '',
  id: '',
  mobile: '',
  showModal: '',
  errorMessage: '',
  token: '',
  is_seller: false,
  logined: false,
};


export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return { ...state, showModal: action.value, errorMessage: '' };

    case SET_ERROR_MESSAGE:
      return { ...state, errorMessage: action.value };

    case SET_MOBILE:
      return { ...state, mobile: action.value };

    case SET_EMAIL:
      return { ...state, email: action.value };

    case SIGNUP_USER:
      console.log('sign up user');
      return {
        ...state,
        name: action.value.name,
        email: action.value.email,
        id: action.value.id,
      };

    case SET_LOGINED:
      return { ...state, logined: true };


    case LOGIN_USER:
      return {
        ...state,
        id: action.value.id,
        name: action.value.name,
        email: action.value.email,
        token: action.value.api_token,
        mobile: action.value.mobile ? action.value.mobile : '',
        is_seller: action.value.is_seller,
      };

    default:
      return state;
  }
};
