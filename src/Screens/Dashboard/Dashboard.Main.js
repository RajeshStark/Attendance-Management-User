import React, { Component } from 'react'
import { Text, View, StatusBar, Image } from 'react-native'

import DashboardStyles from './Styles'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import MarkAttendance from '../../Pages/DashBoard/MarkAttendance'
import AttendanceGraph from '../../ChartsnGraphs/AttendanceGraph'
import { IconButton, Button } from 'react-native-paper'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


export default class DashboardMain extends Component {
  render() {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <View>
          <StatusBar barStyle="light-content" backgroundColor='#2B65EC' />
          <View style={{alignItems:'flex-end',backgroundColor:'#2B65EC',paddingRight:10,paddingTop:10}}>
           <MaterialCommunityIcons name="bell" size={25} color='#fff'/>
          </View>
          <View style={DashboardStyles.ViewStyle}>
            
            <Image
              source={{ uri: 'https://i.ya-webdesign.com/images/funny-png-avatar-2.png' }}
              style={{ height: 100, width: 100 }}
            />
            <Text style={{ fontSize: 20, color: '#fff' }}>Rajesh Sangapogu</Text>
            <Text style={{ fontSize: 16, color: '#fff' }}>React Native Developer</Text>
            <Text style={{ fontSize: 16, color: '#fff' }}>Nutantek Solutions</Text>
          </View>
          <MarkAttendance />
          <View style={DashboardStyles.center}>
            <View style={{  marginBottom: 5 }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={{ fontSize: 18, paddingLeft: 10 }}>Attendance Graph</Text>
                <IconButton icon="file" size={25} onPress={() => this.props.navigation.navigate('AttendanceReport')} />
              </View>
              <AttendanceGraph />
            </View>

            </View>
            <View style={{ flexDirection: 'row', alignItems:'flex-start' }}>
              <Text style={{ fontSize: 16, paddingLeft: 10 }}>Weekly Avg :- 08:30 Hrs -  </Text>
              <Button icon="thumb-down-outline" mode="text" color="#f0ad4e" onPress={() => this.props.navigation.navigate('AttendanceReport')}>
                you'r lagging
              </Button>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
              <Text style={{ fontSize: 16, paddingLeft: 10 }}>Monthly Avg :- 45:30 Hrs </Text>
              <Button icon="thumb-up" mode="text" color='#5cb85c' onPress={() => this.props.navigation.navigate('AttendanceReport')}>
                Great
              </Button>
            </View>
         

        </View>
      </ScrollView>
    )
  }
}


