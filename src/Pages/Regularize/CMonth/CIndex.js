import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions } from 'react-native'
import RDataTable from './RDataTable'
import RegularizeBar from '../../../ChartsnGraphs/RegularizeBar'
import { ScrollView } from 'react-native-gesture-handler'
import { IconButton } from 'react-native-paper'

export default class CIndex extends Component {
  render() {
    return (
      <ScrollView>
        <View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <Text style={{ fontSize: 20, margin: 10 }}>Regularization Status</Text>
            <IconButton
              icon="file-excel"
              size={25}
              onPress={() => console.log('Pressed')}
            />
          </View>

          <View>

            <RegularizeBar />
            <RDataTable />
          </View>
        </View>
      </ScrollView>
    )
  }
}
