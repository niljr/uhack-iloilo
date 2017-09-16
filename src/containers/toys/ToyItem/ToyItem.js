import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { AlertIOS, Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import * as CartActions from '@redux/cart/actions';

class AgeBracket extends Component {
  render() {
    const { toyItem } = this.props;
    
    return(
      <TouchableOpacity style={styles.innerContainer} onPress={this.onPress}>
        <Image source={{uri: 'https://firebasestorage.googleapis.com/v0/b/sample-207f0.appspot.com/o/009167_1.jpg?alt=media&token=98c39e98-48e8-490f-817f-3e432ee554ab'}} style={styles.image} />
        <Text style={styles.label} numberOfLines={2}>{toyItem.item.name.toUpperCase()}</Text>
        <Text style={styles.price}>Php {toyItem.item.price}.00</Text>
      </TouchableOpacity>
    );
  }

  onPress = () => {
    AlertIOS.alert(
      'Add to cart',
      'Do you want to add this item?',
      [
        {text: 'Yes', onPress: () => this.props.addToCart(this.props.toyItem.item)},
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
      ],
    );
  }
}

const mapDispatchToProps = {
  addToCart: CartActions.addToCart
}

export default connect(null, mapDispatchToProps)(AgeBracket);