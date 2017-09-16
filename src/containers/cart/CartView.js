import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { Card, Button } from 'react-native-elements';
import styles from './styles';

class CartView extends Component{
  render(){
    const { cart } = this.props; 
    if (!cart) return null;

    let total = 0;
    console.log(cart)
    if (cart) {
      return (
        <View>
          <Card containerStyle={{padding: 0}} >
            {
              cart.map((u, i) => {
                total += JSON.parse(u.price);
                return (
                  <View style={styles.container} key={u._id}>
                    <Text>{u.name}</Text>
                    <Text>Php {u.price}</Text>
                  </View>
                );
              })
            }
            <View style={styles.total}>
              <Text style={styles.price}>Php {total}</Text>
            </View>
          </Card>
          <Button title='PAY NOW' style={{paddingTop: 40}}/>
        </View>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart.cart
  }
}

export default connect(mapStateToProps, null)(CartView);