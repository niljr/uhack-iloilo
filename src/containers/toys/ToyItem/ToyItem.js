import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

class AgeBracket extends Component {
  render() {
    const { toyItem } = this.props;
    console.log(toyItem)
    return(
      <TouchableOpacity style={styles.innerContainer} onPress={this.onPress}>
        <Image source={require('../../../images/baby.jpg')} style={styles.image} />
        <Text style={styles.label} numberOfLines={2}>{toyItem.item.name.toUpperCase()}</Text>
        <Text style={styles.price}>Php {toyItem.item.price}</Text>
      </TouchableOpacity>
    );
  }

  onPress = () => {
    Actions.tabBar({ageBracket: this.props.age});
  }
}

export default AgeBracket;