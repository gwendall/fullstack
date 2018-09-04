import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from 'core/store';
import history from 'core/history';
import RootRouter from 'routes/index';
import 'core/styles';

const { store, persistor } = configureStore();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router history={history}>
            <RootRouter />
          </Router>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
