import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Authentication from '../Auth/AuthScreen';
import SignInScreen from '../Auth/AuthScreen';
import EntryStack from './EntryStack';



const Stack = createStackNavigator(); 

function RootStack() {
  return (
    <Stack.Navigator headerMode="none" mode="card" >
      <Stack.Screen name="AuthScreen" component={Authentication} />
      <Stack.Screen name="SignInScreen" component={SignInScreen} />
      <Stack.Screen name="EntryStack" component={EntryStack} />
    </Stack.Navigator>
  );
}

export default RootStack;