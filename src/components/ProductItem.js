import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const ProductItem = props => {
  console.log(props.imageUrl);
  return (
    <View style={[styles.container, {flex: 1 / props.columns}]}>
      <Image style={styles.image} source={{uri: props.imageUrl}} />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    aspectRatio: 1,
  },
  container: {
    flexDirection: 'column',
    margin: 1,
  },
});

export default ProductItem;
