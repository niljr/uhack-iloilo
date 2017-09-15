import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, ScrollView, TouchableOpacity, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

class ToysView extends Component{
  componentWillMount() {
    
  }
  render() {
    return (
      <ScrollView>
        <Text>Selection</Text>
        {/* { this.props.ageBracket.map(age => <AgeBracket age={age} key={age.ageCode} />) } */}
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