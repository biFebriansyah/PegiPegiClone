import React, { Component } from 'react';
import Routes from './src/screen/Routes';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import configureStore from './src/utils/redux/store';

import Profile from './src/screen/Profile/Profileee'

class App extends Component {
  render() {
    return <Profile />;
  }
}

export default App;
