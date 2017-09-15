import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, ScrollView, TouchableOpacity, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

import AgeBracket from './AgeBracket/AgeBracket';

class LandingView extends Component{
  render() {
    return (
      <ScrollView>
        { this.props.ageBracket.map(age => <AgeBracket age={age} key={age.ageCode} />) }
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  return {
    ageBracket: state.age.ageBracket
  }
}

export default connect(mapStateToProps, null)(LandingView);