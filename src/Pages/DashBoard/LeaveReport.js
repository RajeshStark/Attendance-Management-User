import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Appbar, DataTable, } from 'react-native-paper';

export default class LeaveReport extends Component {
    render() {
        return (
            <View>
                <Appbar.Header style={{ backgroundColor: '#fff' }}>
                    <Appbar.BackAction
                        onPress={() => this.props.navigation.goBack()}
                    />
                    <Appbar.Content
                        title="Attendance Report"
                    />
                </Appbar.Header>
                <View>
                <DataTable>
        <DataTable.Header>
          <DataTable.Title>Date</DataTable.Title>
          <DataTable.Title numeric>Check In</DataTable.Title>
          <DataTable.Title numeric>Check Out</DataTable.Title>
        </DataTable.Header>

        <DataTable.Row>
          <DataTable.Cell>18/3/2020</DataTable.Cell>
          <DataTable.Cell numeric>10:00 am</DataTable.Cell>
          <DataTable.Cell numeric>07:00 pm</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>19/3/2020</DataTable.Cell>
          <DataTable.Cell numeric>10:00 am</DataTable.Cell>
          <DataTable.Cell numeric>07:00 pm</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>20/3/2020</DataTable.Cell>
          <DataTable.Cell numeric>10:00 am</DataTable.Cell>
          <DataTable.Cell numeric>07:00 pm</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>21/3/2020</DataTable.Cell>
          <DataTable.Cell numeric>10:00 am</DataTable.Cell>
          <DataTable.Cell numeric>07:00 pm</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>22/3/2020</DataTable.Cell>
          <DataTable.Cell numeric>10:00 am</DataTable.Cell>
          <DataTable.Cell numeric>07:00 pm</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>23/3/2020</DataTable.Cell>
          <DataTable.Cell numeric>10:00 am</DataTable.Cell>
          <DataTable.Cell numeric>07:00 pm</DataTable.Cell>
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
