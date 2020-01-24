import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { name as appName } from './app.json';
import App from './src/App';
import configureStore from './src/store/configureStore';

// Pass the Provider as a root element and pass the store and then via react-redux’s connect() function,
// we can connect the any react component to redux store.

const store = configureStore();
const RNRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => RNRedux);
