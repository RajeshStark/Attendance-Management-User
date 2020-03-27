import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import LeaveMain from '../Screens/Leave/Leave.Main';


const Stack = createStackNavigator();

function LeaveStack() {
  return (
    <Stack.Navigator headerMode="none" mode="card" >
      <Stack.Screen name="LeaveHome" component={LeaveMain} />

    </Stack.Navigator>
  );
}

export default LeaveStack;