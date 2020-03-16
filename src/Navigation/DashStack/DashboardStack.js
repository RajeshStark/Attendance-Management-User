import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import MarkAttendance from '../../Pages/DashBoard/MarkAttendance';
import DashboardMain from '../../Screens/Dashboard/Dashboard.Main';

const Stack = createStackNavigator();

function DashBoardStack() {
  return (
    <Stack.Navigator headerMode="none" >
      <Stack.Screen name="DashboardHome" component={DashboardMain} />
      <Stack.Screen name="MarkAttendance" component={MarkAttendance} />
    </Stack.Navigator>
  );
}

export default DashBoardStack;