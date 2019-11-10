import PRODUCTS from '../../data/dummy-data';
import {SET_PRODUCTS} from '../../store/action/products';

const initialState = {
  allProducts: PRODUCTS,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        allProducts: action.products,
      };
    default:
      break;
  }
  return state;
};
