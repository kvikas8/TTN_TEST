import React, {useState, useEffect} from 'react';
import {
  FlatList,
  Button,
  Platform,
  View,
  StyleSheet,
  Text,
  ActivityIndicator,
  Alert,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import ProductItem from '../components/ProductItem';
import Colors from '../constants/Color';
import AppPickerView from '../components/AppPickerView';
import * as productsActions from '../store/action/products';

const ImageGridScreen = props => {
  const [columns, setColumns] = useState(3);
  const [pickerDisplayed, setPickerDisplayed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const products = useSelector(state => state.products.allProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(productsActions.fetchProducts());
    fetchProducts(true);
    props.navigation.setParams({togglePicker: _togglePicker});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchProducts = async (initial = false) => {
    if (initial) {
      setIsLoading(true);
    }
    try {
      await dispatch(productsActions.fetchProducts());
    } catch (err) {
      Alert.alert(err.message);
    }
    if (initial) {
      setIsLoading(false);
    }
  };

  const loadMore = () => {
    fetchProducts(false);
  };

  const _togglePicker = () => {
    setPickerDisplayed(!pickerDisplayed);
  };

  const onPickerValueChanges = newValue => {
    setColumns(newValue);
    _togglePicker();
  };

  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    );
  }

  if (!isLoading && products.length === 0) {
    return (
      <View style={styles.centered}>
        <Text>No products found or an error occurred while getting them!! </Text>
      </View>
    );
  }

  return (
    <View>
      <FlatList
        data={products}
        key={columns}
        keyExtractor={(item, index) => index}
        renderItem={itemData => (
          <ProductItem imageUrl={itemData.item.imageUrl} columns={columns} />
        )}
        onEndReached={loadMore}
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
