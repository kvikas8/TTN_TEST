import PRODUCTS from '../../data/dummy-data';
import {SET_PRODUCTS} from '../../store/action/products';

const initialState = {
  allProducts: [],
  newProducts: [],
};

export default (state = initialState, action) => {
  let newProducts = [];
  let allProducts = [];
  if (state.allProducts.length > 0) {
    newProducts = action.products;
    allProducts = [...state.allProducts, ...newProducts];
  } else {
    newProducts = [];
    allProducts = action.products;
  }
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        allProducts: allProducts,
        newProducts: newProducts,
      };
    default:
      break;
  }
  return state;
};
