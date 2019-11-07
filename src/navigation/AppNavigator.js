import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import ImageGridScreen from '../screens/ImageGridScreen';
import Colors from '../constants/Color';
import {Platform} from 'react-native';
const ProductNavigator = createStackNavigator(
  {
    imageGridScreen: ImageGridScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primary : '',
      },
      headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
    },
  },
);

export default createAppContainer(ProductNavigator);
