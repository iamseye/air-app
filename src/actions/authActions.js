export const SHOW_REGSITER_MODAL = 'SHOW_REGSITER_MODAL';
export const HIDE_REGSITER_MODAL = 'HIDE_REGSITER_MODAL';

export const SHOW_LOGIN_MODAL = 'SHOW_LOGIN_MODAL';
export const HIDE_LOGIN_MODAL = 'HIDE_LOGIN_MODAL';


export const showRegisterModal = () => ({
  type: SHOW_REGSITER_MODAL,
});

export const hideRegisterModal = () => ({
  type: HIDE_REGSITER_MODAL,
});

export const showLoginrModal = () => ({
  type: SHOW_LOGIN_MODAL,
});

export const hideLoginModal = () => ({
  type: HIDE_LOGIN_MODAL,
});
