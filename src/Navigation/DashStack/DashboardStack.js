import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import DashboardMain from '../../Screens/Dashboard/Dashboard.Main';
import MarkAttendance from '../../Pages/DashBoard/MarkAttendance';
import LeaveReport from '../../Pages/DashBoard/LeaveReport';


const Stack = createStackNavigator();

function DashBoardStack() {
  return (
    <Stack.Navigator headerMode="none" mode="card" >
      <Stack.Screen name="DashboardHome" component={DashboardMain} />
      <Stack.Screen name="MarkAttendance" component={MarkAttendance} />
      <Stack.Screen name="LeaveReport" component={LeaveReport} />
    </Stack.Navigator>
  );
}

export default DashBoardStack;