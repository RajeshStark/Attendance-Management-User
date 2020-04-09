import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';


import MyTabs from './BottomNavigation';
import Notification from '../Pages/Profile/Notification';


const Stack = createStackNavigator();

function EntryStack() {
  return (
    <Stack.Navigator headerMode="none" mode="card" >
      <Stack.Screen name="BottomTabs" component={MyTabs} />
      <Stack.Screen name="Notification" component={Notification} />
    </Stack.Navigator>
  );
}

export default EntryStack;