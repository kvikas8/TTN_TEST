import Product from '../../models/Product';
export const SET_PRODUCTS = 'SET_PRODUCTS';
import {NativeModules} from 'react-native';

export const fetchProducts = () => {
  return async dispatch => {
    let imageApi = NativeModules.ImageApi;
    imageApi.fetchProducts((error, products) => {
      if (error) {
        console.log(error);
      } else {
        const resData = JSON.parse(products);
        console.log(resData);
        let loadedProducts = [];
        loadedProducts = resData.map(jsonObj => new Product(jsonObj));
        dispatch({type: SET_PRODUCTS, products: loadedProducts});
      }
    });
  };
};
