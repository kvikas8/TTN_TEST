import React from 'react';
import {FlatList, Text} from 'react-native';
import {useSelector} from 'react-redux';

const ImageGridScreen = props => {
  const products = useSelector(state => state.products.allProducts);
  console.log(products);
  return (
    <FlatList
      data={products}
      keyExtractor={item => item.id}
      renderItem={itemData => <Text>{itemData.item.name}</Text>}
    />
  );
};

export default ImageGridScreen;
