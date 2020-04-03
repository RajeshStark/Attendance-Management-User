import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions } from 'react-native'
import RDataTable from './RDataTable'
import RegularizeBar from '../../../ChartsnGraphs/RegularizeBar'
import { ScrollView } from 'react-native-gesture-handler'
import { IconButton, Button } from 'react-native-paper'

export default class PIndex extends Component {
  render() {
    return (
      <ScrollView>
        <View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <Text style={{ fontSize: 18,margin:10}}>Regularization Status</Text>
            <IconButton
              icon="file-excel"
              size={25}
              onPress={() => console.log('Pressed')}
            />
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <Text style={{ fontSize: 16, paddingLeft: 5 }}>Avg Shortfall :- 00:00 Hrs -  </Text>
              <Button icon="thumb-up" mode="text" color='#5cb85c'>
                Great
              </Button>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <Text style={{ fontSize: 16, paddingLeft: 5 }}>Avg Catch Up:- 0:30 Hrs </Text>
              <Button icon="thumb-up" mode="text" color='#5cb85c' >
                Great
              </Button>
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
