import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, ScrollView, TouchableOpacity, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

import * as ToyActions from '@redux/toys/actions';
import ToyItem from './ToyItem/ToyItem';

class ToysView extends Component{
  componentWillMount() {
    const { ageBracket, filterToys, toyList } = this.props;
    filterToys(ageBracket.ageCode, toyList);
  }

  render() {
    return (
      <ScrollView>
        <Text>Selection</Text>
        { this.props.filteredToys && this.props.filteredToys.map(item => 
            <ToyItem toyItem={item} key={item._id} />  
        )}
      </ScrollView>
    );
  }
}

const mapDispatchToProps = {
  filterToys: ToyActions.filterToys
}

const mapStateToProps = state => {
  return {
    filteredToys: state.toys.filteredToys,
    toyList: state.toys.toyList
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToysView);