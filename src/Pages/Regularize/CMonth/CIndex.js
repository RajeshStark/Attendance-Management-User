import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import RDataTable from './RDataTable'
import RegularizeBar from '../../../ChartsnGraphs/RegularizeBar'
import { ScrollView } from 'react-native-gesture-handler'
import { IconButton, Button } from 'react-native-paper'

export default class CIndex extends Component {
  render() {
    return (
      <ScrollView>
        <View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <Text style={{ fontSize: 18, margin: 10 }}>Regularization Status</Text>
            <IconButton
              icon="file-excel"
              size={25}
              onPress={() => console.log('Pressed')}
            />
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <Text style={{ fontSize: 16, paddingLeft: 5 }}>Avg Shortfall :- 01:30 Hrs -  </Text>
              <Button icon="thumb-down-outline" mode="text" color="#f0ad4e" >
                you'r lagging
              </Button>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <Text style={{ fontSize: 16, paddingLeft: 5 }}>Avg Catch Up:- 5:30 Hrs </Text>
              <Button icon="thumb-up" color="#5cb85c" mode='text' >
                Great
              </Button>
            </View>
          <View>
          {/* <View style={{ flexDirection: 'row', alignItems:'baseline',marginBottom:10 }}>
              <Text style={{ fontSize: 16, paddingLeft: 10 }}>Weekly Avg :- 08:30 Hrs :  </Text>
              <TouchableOpacity style={{ fontSize: 14, paddingLeft:10, flexDirection: 'row', alignItems:'center' }}  onPress={() => this.props.navigation.navigate('AttendanceReport')}>
              <IconButton icon="thumb-down-outline" color="#f0ad4e" size={20}/>
              <Text style={{ fontSize: 16, color:"#f0ad4e" }}>YOU'R LAGGING</Text>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', alignItems:'baseline',marginBottom:10 }}>
              <Text style={{ fontSize: 16, paddingLeft: 10 }}>Monthly Avg :- 45:30 Hrs :  </Text>
              <TouchableOpacity style={{ fontSize: 14, paddingLeft:10, flexDirection: 'row', alignItems:'center' }}  onPress={() => this.props.navigation.navigate('AttendanceReport')}>
              <IconButton icon="thumb-up-outline" color="#5cb85c" size={20}/>
              <Text style={{ fontSize: 16, color:"#5cb85c" }}>GREAT</Text>
              </TouchableOpacity>
            </View> */}

            <RegularizeBar />
            <RDataTable />
          </View>
        </View>
      </ScrollView>
    )
  }
}
