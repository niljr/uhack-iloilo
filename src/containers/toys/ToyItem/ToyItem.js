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
        <Image source={{uri: 'https://firebasestorage.googleapis.com/v0/b/sample-207f0.appspot.com/o/009167_1.jpg?alt=media&token=98c39e98-48e8-490f-817f-3e432ee554ab'}} style={styles.image} />
        <Text style={styles.label} numberOfLines={2}>{toyItem.item.name.toUpperCase()}</Text>
        <Text style={styles.price}>Php {toyItem.item.price}.00</Text>
      </TouchableOpacity>
    );
  }

  onPress = () => {
    Actions.product({productItem: this.props.toyItem});
  }
}

export default AgeBracket;