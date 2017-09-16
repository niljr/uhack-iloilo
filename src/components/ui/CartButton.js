import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { AppColors, AppStyles } from '@theme/';
import { TouchableOpacity } from 'react-native';

const CartButton = () => (
  <TouchableOpacity onPress={Actions.cart}>
    <Icon 
      name={'md-basket'} 
      size={30} 
      color={AppColors.brand.primary} 
      style={[...AppStyles.containerCentered,{ top: -2 }]}
    />
  </TouchableOpacity>
)

export default CartButton;