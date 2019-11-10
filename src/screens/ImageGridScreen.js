import React, {useState, useEffect} from 'react';
import {FlatList, Button, Platform, View, StyleSheet, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import ProductItem from '../components/ProductItem';
import Colors from '../constants/Color';
import AppPickerView from '../components/AppPickerView';
//import { useSelector, useDispatch } from 'react-redux';
import * as productsActions from '../store/action/products';

const ImageGridScreen = props => {
  const [columns, setColumns] = useState(3);
  const [pickerDisplayed, setPickerDisplayed] = useState(false);
  const products = useSelector(state => state.products.allProducts);
  const dispatch = useDispatch();
  //props.navigation.setParams({togglePicker: _togglePicker});

  useEffect(() => {
    // dispatch(productsActions.fetchProducts());
    fetchProducts();
    props.navigation.setParams({togglePicker: _togglePicker});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const fetchProducts = () => {
    dispatch(productsActions.fetchProducts());
  };
  const _togglePicker = () => {
    setPickerDisplayed(!pickerDisplayed);
  };

  const onPickerValueChanges = newValue => {
    setColumns(newValue);
    _togglePicker();
  };

  return (
    <View>
      <FlatList
        data={products}
        key={columns}
        keyExtractor={(item, index) => index}
        renderItem={itemData => (
          <ProductItem imageUrl={itemData.item.imageUrl} columns={columns} />
        )}
        onEndReached={fetchProducts}
        numColumns={columns}
      />
      <AppPickerView
        onValueChange={onPickerValueChanges}
        onCancel={_togglePicker}
        pickerDisplayed={pickerDisplayed}
      />
    </View>
  );
};

ImageGridScreen.navigationOptions = ({navigation}) => {
  return {
    headerTitle: 'All Products',
    headerRight: () => (
      <Button
        onPress={navigation.getParam('togglePicker')}
        title="Column"
        color={Platform.OS === 'android' ? 'white' : Colors.primary}
      />
    ),
  };
};

const styles = StyleSheet.create({
  centered: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

export default ImageGridScreen;
