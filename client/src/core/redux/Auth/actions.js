import * as AuthSelector from './selector';
import types from './constants';

import Api from 'core/api';

export function signup({ name, email, password }) {
  return (dispatch, getState) => {
    const state = getState();
    return dispatch({
      type: types.SIGNUP,
      payload: Api.Auth.signup({ name, email, password }),
    });
  };
}

export function logout() {
  return (dispatch, getState) => {
    const state = getState();
    const refreshToken = '';
    return dispatch({
      type: types.LOGOUT,
      payload: Api.Auth.logout({ refreshToken }),
    });
  };
}
