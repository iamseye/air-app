import {
  SHOW_REGSITER_MODAL,
  HIDE_REGSITER_MODAL,
  SHOW_LOGIN_MODAL,
  HIDE_LOGIN_MODAL,
} from '../actions/authActions';

const initialState = {
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

    default:
      return state;
  }
};
