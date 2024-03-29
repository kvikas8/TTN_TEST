import Product from '../../models/product';
export const SET_PRODUCTS = 'SET_PRODUCTS';
import {NativeModules} from 'react-native';

export const fetchProducts = () => {
  return async dispatch => {
    try {
      let imageApi = NativeModules.ImageApi;
      const productsJsonStr = await imageApi.fetchProducts();
      const resData = JSON.parse(productsJsonStr);
      let loadedProducts = [];
      loadedProducts = resData.map(jsonObj => new Product(jsonObj));
      dispatch({type: SET_PRODUCTS, products: loadedProducts});
    } catch (err) {
      throw err;
    }
  };
};
