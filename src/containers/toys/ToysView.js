import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, FlatList, TouchableOpacity, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

import * as ToyActions from '@redux/toys/actions';
import ToyItem from './ToyItem/ToyItem';
import styles from './ToyItem/styles'

class ToysView extends Component{
  state = {selected: (new Map(): Map<string, boolean>)};
  componentWillMount() {
    const { currentAgeBracket, filterToys, toyList } = this.props;
    filterToys(currentAgeBracket.ageCode, toyList);
  }

  render() {
    if (!this.props.filteredToys) return null;
    
    if (this.props.filteredToys) {
      return (
        <FlatList
          horizontal={false}
          numColumns={2}
          data={this.props.filteredToys}
          extraData={this.state}
          keyExtractor={(item) => item._id}
          renderItem={(item) => <ToyItem toyItem={item} key={item._id} /> }
        />
      );
    }
  }
}

const mapDispatchToProps = {
  filterToys: ToyActions.filterToys
}

const mapStateToProps = state => {
  return {
    currentAgeBracket: state.age.currentAgeBracket,
    filteredToys: state.toys.filteredToys,
    toyList: state.toys.toyList
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToysView);