import React, { Component } from 'react'
import { Text, View, ScrollView } from 'react-native'
import { IconButton } from 'react-native-paper';

//My Imports
import LeavePieChart from '../../ChartsnGraphs/LeavePieChart'
import PickeOfDateTime from '../../Pages/Leave/DateTimePicker';
import LeaveApply from './LeaveApply';
import PickingTime from '../../Pages/Leave/TimePicker';


export default class LeaveMain extends Component {
    render() {
        return (
            <ScrollView>
                <View>
                    <LeavePieChart />
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <Text style={{ fontSize: 18, padding: 10 }}>Apply For Leave</Text>
                    <IconButton icon="file" size={25} onPress={() => this.props.navigation.navigate('LeaveReport')} />
                    </View>
                    <PickeOfDateTime/>
                    <PickingTime/>
                    <LeaveApply/>
                </View>
            </ScrollView>
        )
    }
}
