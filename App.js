/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import productReducer from './src/store/reducers/products';
import AppNavigator from './src/navigation/AppNavigator';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  products: productReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
