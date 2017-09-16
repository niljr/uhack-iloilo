import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Image, TouchableOpacity, View } from 'react-native';
import styles from './styles';

class ProductView extends Component {
  render() {
    const { productItem } = this.props;
    return(
      <View style={{ flex: 1 }}>
        <Image source={require('../../images/baby.jpg')} style={styles.image}/>
      </View>
    );
  }
}

export default ProductView;