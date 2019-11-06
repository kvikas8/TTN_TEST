/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View} from 'react-native';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import productReducer from './src/store/reducers/products';
import ImageGridScreen from './src/screens/ImageGridScreen';

const rootReducer = combineReducers({
  products: productReducer,
});

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <View>
        <ImageGridScreen />
      </View>
    </Provider>
  );
};

export default App;
