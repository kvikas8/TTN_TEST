import React, {useState, useEffect} from 'react';
import {FlatList, Button, Platform, View} from 'react-native';
import {useSelector} from 'react-redux';
import ProductItem from '../components/ProductItem';
import Colors from '../constants/Color';
import AppPickerView from '../components/AppPickerView';

const ImageGridScreen = props => {
  const [columns, setColumns] = useState(3);
  const [pickerDisplayed, setPickerDisplayed] = useState(false);
  const products = useSelector(state => state.products.allProducts);
  //props.navigation.setParams({togglePicker: _togglePicker});
  useEffect(() => {
    props.navigation.setParams({togglePicker: _togglePicker});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        keyExtractor={item => item.id}
        renderItem={itemData => (
          <ProductItem imageUrl={itemData.item.imageUrl} columns={columns} />
        )}
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

export default ImageGridScreen;
