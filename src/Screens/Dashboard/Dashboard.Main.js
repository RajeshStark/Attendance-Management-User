import React, { Component } from 'react'
import { Text, View, StatusBar, Image } from 'react-native'

import DashboardStyles from './Styles'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import MarkAttendance from '../../Pages/DashBoard/MarkAttendance'
import AttendanceGraph from '../../ChartsnGraphs/AttendanceGraph'
import { IconButton, Button } from 'react-native-paper'
import BellIcon from '../../Components/Bellicon'


export default class DashboardMain extends Component {
  render() {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <View>
          <StatusBar barStyle="light-content" backgroundColor='#2B65EC' />
          <View style={{alignItems:'flex-end',backgroundColor:'#2B65EC',paddingRight:10,paddingTop:10}}>
           <BellIcon navigation={this.props.navigation.navigate}/>
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
            <View style={{ marginBottom:10 }}>
              <Text style={{ fontSize: 14, paddingLeft: 10 }}>Weekly Avg :- </Text>
              <TouchableOpacity style={{  paddingLeft:10, flexDirection: 'row', alignItems:'center' }}  onPress={() => this.props.navigation.navigate('AttendanceReport')}>
              <Text style={{ fontSize: 14, paddingLeft: 10 }}>08:30 Hrs :  </Text>
              <IconButton icon="thumb-down-outline" color="#f0ad4e" size={20}/>
              <Text style={{ fontSize: 14, color:"#f0ad4e" }}>YOU'R LAGGING</Text>
              </TouchableOpacity>
            </View>
            <View style={{ marginBottom:10 }}>
              <Text style={{ fontSize: 14, paddingLeft: 10 }}>Monthly Avg :- </Text>
              <TouchableOpacity style={{  paddingLeft:10, flexDirection: 'row', alignItems:'center' }}  onPress={() => this.props.navigation.navigate('AttendanceReport')}>
              <Text style={{ fontSize: 14, paddingLeft: 10 }}>45:30 Hrs :  </Text>
              <IconButton icon="thumb-up-outline" color="#5cb85c" size={20}/>
              <Text style={{ fontSize: 14, color:"#5cb85c" }}>GREAT</Text>
              </TouchableOpacity>
            </View>
         

        </View>
      </ScrollView>
    )
  }
}


