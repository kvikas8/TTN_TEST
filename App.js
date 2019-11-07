/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import productReducer from './src/store/reducers/products';
import AppNavigator from './src/navigation/AppNavigator';

const rootReducer = combineReducers({
  products: productReducer,
});

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
