import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Image, TouchableOpacity, View, Text, Button } from 'react-native';
import styles from './styles';

class ProductView extends Component {
  render() {
    const { productItem } = this.props;
    return(
      <View style={{ flex: 1 }}>
        <Image source={require('../../images/baby.jpg')} style={styles.image}/>
        <Text>{productItem.name}</Text>
        <Button title="Add to Cart" />
      </View>
    );
  }
}

export default ProductView;