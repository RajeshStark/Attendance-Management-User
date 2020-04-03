import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import LeaveMain from '../Screens/Leave/Leave.Main';
import LeaveReport from '../Pages/Leave/LeaveReport';
import LeaveView from '../Pages/Leave/LeaveView';
import LeaveEdit from '../Pages/Leave/LeaveEdit';

const Stack = createStackNavigator();

function LeaveStack() {
  return (
    <Stack.Navigator headerMode="none" mode="card" >
      <Stack.Screen name="LeaveHome" component={LeaveMain} />
      <Stack.Screen name="LeaveReport" component={LeaveReport} />
      <Stack.Screen name="LeaveEdit" component={LeaveEdit}/>
      <Stack.Screen name="LeaveView" component={LeaveView}/>
    </Stack.Navigator> 
  );
}

export default LeaveStack;