import types from './constants';
import initialState from './state';

export const STATE_KEY = 'auth';

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case types.SIGNUP_FULFILLED: {
      return {
        ...state,
        jwt: action.payload.jwt,
      };
    }
    case types.LOGOUT_FULFILLED: {
      return {
        ...state,
        jwt: null,
      };
    }
    default: {
      return state;
    }
  }
}
