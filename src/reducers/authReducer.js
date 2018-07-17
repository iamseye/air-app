import {
  SIGNUP_USER,
  SHOW_MODAL,
} from '../actions/authActions';

const initialState = {
  user: {},
  showModal: '',
};


export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return { ...state, showModal: action.value };

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
