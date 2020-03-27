import React, { Component } from 'react'
import { Text, View, ScrollView } from 'react-native'

//My Imports
import LeavePieChart from '../../ChartsnGraphs/LeavePieChart'
import PickeOfDateTime from '../../Pages/Leave/DateTimePicker';
import LeaveApply from './LeaveApply';

export default class LeaveMain extends Component {
    render() {
        return (
            <ScrollView>
                <View style={{marginTop:20}}>
                    <Text style={{ fontSize: 18, padding: 10 }}>Your Leave Chart For March</Text>
                    <LeavePieChart />
                    <Text style={{ fontSize: 18, padding: 10 }}>Apply For Leave</Text>
                    <PickeOfDateTime/>
                    <LeaveApply/>
                </View>
            </ScrollView>
        )
    }
}
