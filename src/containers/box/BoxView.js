import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, ScrollView, TouchableOpacity, View, Image, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { PricingCard } from 'react-native-elements'

class ToysView extends Component{
  componentWillMount() {
    
  }
  render() {
    return (
      <ScrollView style={{ flex: 1}}>
        <PricingCard
          color='#36BA8A'
          title='Basic'
          price='Php 1,000.00'
          info={['1 Month Subscription', '5 Educational Toys', 'Customer Support']}
          button={{ title: 'GET STARTED', icon: 'send' }}
        />
        <PricingCard
          color='#36BA8A'
          title='Premium'
          price='Php 2,000.00'
          info={['1 Month Subscription', '10 Educational Toys', 'Customer Support']}
          button={{ title: 'GET STARTED', icon: 'send' }}
        />
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  return {
    ageBracket: state.age.ageBracket
  }
}

export default connect(null, null)(ToysView);