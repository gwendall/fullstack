import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import thunkMiddleware from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from 'core/reducers';
import { createLogger } from 'redux-logger';
import { isDev } from 'core/utils/env';

export const persistConfig = {
  key: 'root',
  storage,
  version: 5,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const logger = createLogger({
  logErrors: true,
  diff: true,
});

const configureStore = () => {
  const middleware = [thunkMiddleware, promiseMiddleware() /* isDev() && logger */].filter(Boolean);
  const store = createStore(persistedReducer, applyMiddleware(...middleware));
  const persistor = persistStore(store);
  return { store, persistor };
};

export default configureStore;
