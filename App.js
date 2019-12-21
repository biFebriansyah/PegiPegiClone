import React, { Component } from 'react';
import Routes from './src/screen/Routes';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import configureStore from './src/utils/redux/store';

import Profile from './src/screen/Profile/Profilee'
const { store, persistor } = configureStore();
class App extends Component {
  render() {
    return (
      <PersistGate persistor={persistor}>
      <Provider store={store}>
        <Routes />
      </Provider>
    </PersistGate>
    )
  }
}

export default App;
