import React, { Component } from 'react';
//Import React

import { StyleSheet, Text, View } from 'react-native';
//Import Basic React Native Component

import SegmentedControlTab from 'react-native-segmented-control-tab';
import CIndex from '../../Pages/Regularize/CMonth/CIndex';
import PIndex from '../../Pages/Regularize/PMonth/PIndex';
//Import SegmentedControlTab

class Segment extends Component {
  constructor() {
    super();
    this.state = {
      selectedIndex: 1,

    };
  }

  handleSingleIndexSelect = (index = number) => {
    //handle tab selection for single Tab Selection SegmentedControlTab
    this.setState(prevState => ({ ...prevState, selectedIndex: index }));
  };


  render() {
    const { selectedIndex } = this.state;
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var now = new Date();
    var thisMonth = months[now.getMonth()];
    var lastMonth = months[now.getMonth()-1]
    return (
      <View>
        <View style={styles.container}>

          <SegmentedControlTab
            values={[lastMonth,thisMonth]}
            selectedIndex={selectedIndex}
            tabStyle={styles.tabStyle}
            activeTabStyle={styles.activeTabStyle}
            onTabPress={this.handleSingleIndexSelect}
          />
        </View>
        {this.state.selectedIndex === 1 ? <CIndex /> : <PIndex />}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },
  headerText: {
    padding: 8,
    fontSize: 14,
    color: '#444444',
    textAlign: 'center',
  },
  tabContent: {
    color: '#444444',
    fontSize: 18,
    margin: 24,
  },
  Seperator: {
    marginHorizontal: -10,
    alignSelf: 'stretch',
    borderTopWidth: 1,
    borderTopColor: '#888888',
    marginTop: 24,
  },
  tabStyle: {
    borderColor: '#2B65EC',
  },
  activeTabStyle: {
    backgroundColor: '#2B65EC',
  },
});

export default Segment;