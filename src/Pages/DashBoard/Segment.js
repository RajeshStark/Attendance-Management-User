import React, { Component } from 'react';
//Import React

import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Appbar, DataTable, IconButton} from 'react-native-paper';
//Import Basic React Native Component

import SegmentedControlTab from 'react-native-segmented-control-tab';
import CMonthIndex from './CMonth/CMonthIndex';
import PMonthindex from './PMonth/PMonthindex';

//Import SegmentedControlTab

class DSegment extends Component {
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
    console.log(thisMonth)
    return (
      <View>
          <Appbar.Header style={{ backgroundColor: '#fff' }}>
          <Appbar.BackAction
            onPress={() => this.props.navigation.goBack()}
          />
          {/* <Appbar.Content
            title="Attendance Report"
          />
          <IconButton
            icon="file-excel"
            size={25}
            onPress={() => console.log('Pressed')}
          />
         */}
        <View style={styles.container}>

          <SegmentedControlTab
            values={[lastMonth,thisMonth]}
            selectedIndex={selectedIndex}
            tabStyle={styles.tabStyle}
            activeTabStyle={styles.activeTabStyle}
            onTabPress={this.handleSingleIndexSelect}
          />
        </View>
        </Appbar.Header>
        {this.state.selectedIndex === 1 ? <CMonthIndex /> : <PMonthindex />}

      </View>
    );
  }
}

const DEVICE_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // padding: 10,
    width:(DEVICE_WIDTH)-60
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

export default DSegment;