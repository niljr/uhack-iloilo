import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

class AgeBracket extends Component {
  render() {
    const { toyItem } = this.props;
    return(
      <TouchableOpacity style={styles.container} onPress={this.onPress}>
        <Image source={{ uri: toyItem.image }} style={styles.image} />
        <Text style={styles.label}>{toyItem.name.toUpperCase()}</Text>
      </TouchableOpacity>
    );
  }

  onPress = () => {
    Actions.tabBar({ageBracket: this.props.age});
  }
}

export default AgeBracket;