import Product from '../../models/Product';
export const SET_PRODUCTS = 'SET_PRODUCTS';
import {NativeModules} from 'react-native';

export const fetchProducts = () => {
  return async dispatch => {
    let imageApi = NativeModules.ImageApi;
    const productsJsonStr = await imageApi.fetchProducts();
    const resData = JSON.parse(productsJsonStr);
    let loadedProducts = [];
    loadedProducts = resData.map(jsonObj => new Product(jsonObj));
    dispatch({type: SET_PRODUCTS, products: loadedProducts});
  };
};