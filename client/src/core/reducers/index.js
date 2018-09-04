import { combineReducers } from 'redux';

import authTypes from 'core/redux/Auth/constants';
import authState, { STATE_KEY as AUTH_STATE_KEY } from 'core/redux/Auth/reducer';

const appReducer = combineReducers({
  [AUTH_STATE_KEY]: authState,
});

const rootReducer = (state, action) => {
  if (action.type === authTypes.LOGOUT_FULFILLED) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
