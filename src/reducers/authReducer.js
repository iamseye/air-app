import {
  SHOW_REGSITER_MODAL,
  HIDE_REGSITER_MODAL,
  SHOW_LOGIN_MODAL,
  HIDE_LOGIN_MODAL,
  SIGNUP_USER,
} from '../actions/authActions';

const initialState = {
  user: {},
  isRegisterModalShow: false,
  isLoginModalShow: false,
};


export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_REGSITER_MODAL:
      return { ...state, isRegisterModalShow: true };

    case HIDE_REGSITER_MODAL:
      return { ...state, isRegisterModalShow: false };

    case SHOW_LOGIN_MODAL:
      return { ...state, isLoginModalShow: true };

    case HIDE_LOGIN_MODAL:
      return { ...state, isLoginModalShow: false };

    case SIGNUP_USER:
      console.log('sign up user');
      console.log(action.value);
      return {
        ...state,
        name: action.value.name,
        email: action.value.email,
        id: action.value.id,
      };
    default:
      return state;
  }
};
