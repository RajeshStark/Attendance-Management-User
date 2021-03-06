import React, { Component } from 'react';
import { Text, View, Dimensions, StyleSheet } from 'react-native';
import { Appbar, DataTable, IconButton, } from 'react-native-paper';

export default class AttendanceReport extends Component {
  render() {
    var d = new Date();
var n = d.getDate();
console.log(n);
    return (
      <View>
        <Appbar.Header style={{ backgroundColor: '#fff' }}>
          <Appbar.BackAction
            onPress={() => this.props.navigation.goBack()}
          />
          <Appbar.Content
            title="Attendance Report"
          />
          <IconButton
            icon="file-excel"
            size={25}
            onPress={() => console.log('Pressed')}
          />
        </Appbar.Header>
        <View>
          <View style={{flexDirection:'row', justifyContent:'space-around'}}>
            <IconButton
              icon="chevron-left"
              size={20}
              onPress={() => console.log('Pressed')}
            />
            <View>
              <Text style={{ textAlign: 'center', fontSize: 18 }}>2020</Text>
              <Text style={{ textAlign: 'center', fontSize: 18 }}>March</Text>
            </View>
            <IconButton
              icon="chevron-right"
              size={20}
              onPress={() => console.log('Pressed')}
            />
          </View>
          <DataTable>
            <DataTable.Header>
              <DataTable.Title>Date</DataTable.Title>
              <DataTable.Title numeric>Check In</DataTable.Title>
              <DataTable.Title numeric>Check Out</DataTable.Title>
              <DataTable.Title numeric>Cloack Hrs</DataTable.Title>
            </DataTable.Header>

            <DataTable.Row>
              <DataTable.Cell>18/3/2020</DataTable.Cell>
              <DataTable.Cell numeric>10:00 am</DataTable.Cell>
              <DataTable.Cell numeric>07:00 pm</DataTable.Cell>
              <DataTable.Cell numeric style={styles.great}>09:00 hrs</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell>19/3/2020</DataTable.Cell>
              <DataTable.Cell numeric>10:00 am</DataTable.Cell>
              <DataTable.Cell numeric>06:00 pm</DataTable.Cell>
              <DataTable.Cell numeric style={styles.sLag}>08:00 hrs</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell>20/3/2020</DataTable.Cell>
              <DataTable.Cell numeric>10:00 am</DataTable.Cell>
              <DataTable.Cell numeric>07:00 pm</DataTable.Cell>
              <DataTable.Cell numeric style={styles.great}>09:00 hrs</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell>21/3/2020</DataTable.Cell>
              <DataTable.Cell numeric>10:00 am</DataTable.Cell>
              <DataTable.Cell numeric>07:00 pm</DataTable.Cell>
              <DataTable.Cell numeric style={styles.great}>09:00 hrs</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell>22/3/2020</DataTable.Cell>
              <DataTable.Cell numeric>10:00 am</DataTable.Cell>
              <DataTable.Cell numeric>05:00 pm</DataTable.Cell>
              <DataTable.Cell numeric style={styles.lagging}>07:00 hrs</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell>23/3/2020</DataTable.Cell>
              <DataTable.Cell numeric>10:00 am</DataTable.Cell>
              <DataTable.Cell numeric>07:00 pm</DataTable.Cell>
              <DataTable.Cell numeric style={styles.great}>09:00 hrs</DataTable.Cell>
            </DataTable.Row>

            {/* <DataTable.Pagination
          page={1}
          numberOfPages={3}
          onPageChange={(page) => { console.log(page); }}
          label="1-2 of 6"
        /> */}
          </DataTable>
        </View>
      </View>
    )
  }
}

const ColorCodes = {
  primary: '#0275d8',
  success: '#5cb85c',
  info: '#5bc0de',
  warning: '#f0ad4e',
  red: '#d9534f',
  faded: '#f7f7f7'
}

const DEVICE_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  lagging: {
    backgroundColor: ColorCodes.red,
    marginLeft: 20,
    marginRight: -10,
    justifyContent: 'center'
  },

  great: {
    backgroundColor: ColorCodes.success,
    marginLeft: 20,
    marginRight: -10,
    justifyContent: 'center'
  },

  sLag: {
    backgroundColor: ColorCodes.warning,
    marginLeft: 20,
    marginRight: -10,
    justifyContent: 'center'
  },

})