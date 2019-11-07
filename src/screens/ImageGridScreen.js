import React from 'react';
import {FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import ProductItem from '../components/ProductItem';

const ImageGridScreen = props => {
  const products = useSelector(state => state.products.allProducts);
  console.log(products);
  return (
    <FlatList
      data={products}
      keyExtractor={item => item.id}
      renderItem={itemData => (
        <ProductItem imageUrl={itemData.item.imageUrl} columns={3} />
      )}
      numColumns={3}
    />
  );
};

ImageGridScreen.navigationOptions = {
  headerTitle: 'All Products',
};

export default ImageGridScreen;
