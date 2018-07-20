import {
  SIGNUP_USER,
  SHOW_MODAL,
  SET_MOBILE,
} from '../actions/authActions';

const initialState = {
  user: {
    name: '',
    email: '',
    id: '',
    mobile: '',
  },
  showModal: '',
};


export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return { ...state, showModal: action.value };

    case SET_MOBILE:
      return { ...state, user: { mobile: action.value } };

    case SIGNUP_USER:
      console.log('sign up user');
      return {
        ...state,
        user: {
          name: action.value.name,
          email: action.value.email,
          id: action.value.id,
        },
      };
    default:
      return state;
  }
};
