import {
  SIGNUP_USER,
  SHOW_MODAL,
  SET_MOBILE,
  SET_ERROR_MESSAGE,
} from '../actions/authActions';

const initialState = {
  name: '',
  email: '',
  id: '',
  mobile: '',
  showModal: '',
  errorMessage: '',
};


export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return { ...state, showModal: action.value, errorMessage: '' };

    case SET_ERROR_MESSAGE:
      return { ...state, errorMessage: action.value };

    case SET_MOBILE:
      return { ...state, mobile: action.value };

    case SIGNUP_USER:
      console.log('sign up user');
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
