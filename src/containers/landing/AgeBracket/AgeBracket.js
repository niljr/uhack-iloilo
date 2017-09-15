import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

class AgeBracket extends Component {
  render() {
    const { age } = this.props;
    return(
      <TouchableOpacity style={styles.container} onPress={this.onPress}>
        <Text>{age.label}</Text>
      </TouchableOpacity>
    );
  }

  onPress = () => {
    Actions.tabBar({ageBracket: this.props.age});
  }
}

export default AgeBracket;