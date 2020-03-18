import React, { Component } from 'react'
import { Text, View, StatusBar, Image } from 'react-native'

import DashboardStyles from './Styles'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import YAxisExample from './AxisChart'


export default class DashboardMain extends Component {
    render() {
        return (
            <ScrollView
              showsVerticalScrollIndicator={false}
            >
            <View>
                 <StatusBar barStyle="light-content" backgroundColor='#2B65EC'/>
                 <View style={DashboardStyles.ViewStyle}>
                  <Image 
                    source={{uri: 'https://i.ya-webdesign.com/images/funny-png-avatar-2.png'}}
                    style={{height:100,width:100}}
                  />
                  <Text style={{fontSize:24,color:'#fff'}}>Rajesh Sangapogu</Text>
                  <Text style={{fontSize:16,color:'#fff'}}>Designation: React Native Developer</Text>
                  <Text style={{fontSize:16,color:'#fff'}}>Company: Nutantek Solutions</Text>
                </View>
                <View style={DashboardStyles.center}>
                    <View style={{paddingTop:10}}>
                    <TouchableOpacity style={DashboardStyles.touchable}
                     onPress={() => this.props.navigation.navigate('MarkAttendance')}
                    >
                        <Text style={DashboardStyles.mainText}>Mark Attendance</Text>
                    </TouchableOpacity>
                    </View>

                    <View style={{paddingTop:10}}>
                    <TouchableOpacity style={DashboardStyles.touchable}
                      onPress={() => this.props.navigation.navigate('LeaveReport')}
                    >
                        <Text style={DashboardStyles.mainText}>Attendance Report</Text>
                    </TouchableOpacity>
                    </View>

               <View style={{padding:10, marginBottom:20}}>
                <YAxisExample/>
               </View>        
                   
                </View>
            </View>
            </ScrollView>
        )
    }
}


