import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

import * as AgeActions from '@redux/age/actions';

class AgeBracket extends Component {
  render() {
    const { age } = this.props;
    return(
      <TouchableOpacity style={styles.container} onPress={this.onPress}>
        <Image source={age.image} style={styles.image} borderRadius={5}>
          <View style={styles.overlay}>
            <Text style={styles.label}>{age.label.toUpperCase()}</Text>
            <Text style={styles.age}>{age.age}</Text>
          </View>
        </Image>
      </TouchableOpacity>
    );
  }

  onPress = () => {
    this.props.setAgeBracket(this.props.age)
    Actions.tabBar();
  }
}

const mapDispatchToProps = {
  setAgeBracket: AgeActions.setAgeBracket
}

export default connect(null, mapDispatchToProps)(AgeBracket);